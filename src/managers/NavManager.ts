import { RefObject, useEffect } from "react";

// NavBar.height: 64px | 4rem | h-16
// Hide on scroll threshold: 30px
const SCROLL_Y_THRESHOLD = 30;

export class NavManager {
	/**
	 * Used to control the hide on scroll behavior of the navbar header
	 */
	private static shouldListenToScroll = true;
	/**
	 * Track scroll position. Used with SCROLL_Y_THRESHOLD to hide navbar on scroll
	 */
	private static _currentScrollY = 0;

	static get isListeningToScroll() {
		return this.shouldListenToScroll;
	}

	public static enableScrollListener(enabled = true) {
		this.shouldListenToScroll = enabled;
	}

	static get currentScrollY() {
		return this._currentScrollY;
	}

	public static updateCurrentScrollY() {
		this._currentScrollY = globalThis.scrollY;
	}

	public static smoothScrollTo(id: string, callback?: () => void) {
		if (!globalThis.document) return null;
		const dom = document.getElementById(id);
		return () => {
			this.enableScrollListener(false);
			document.documentElement.scrollTo({
				top: dom?.offsetTop,
				behavior: "smooth",
			});
			callback?.();
		};
	}

	public static onScrollFinished(headerRef: RefObject<HTMLElement>, callback?: () => void) {
		callback?.();
		this.updateCurrentScrollY();
		headerRef.current?.classList.toggle("bg-[#ffffffa0]", window.scrollY > SCROLL_Y_THRESHOLD);
		// TODO: update selected nav item
	}
}

export const hooks = {
	useHideHeaderOnScroll: (headerRef: RefObject<HTMLElement>) => {
		useEffect(() => {
			let debounceTimer: NodeJS.Timer;
			const handleScroll = () => {
				clearTimeout(debounceTimer);

				// Do not hide when scrolling by tapping NavItem in NavItemsList
				if (!NavManager.isListeningToScroll) {
					NavManager.onScrollFinished(headerRef, () => {
						debounceTimer = setTimeout(() => {
							NavManager.enableScrollListener();
						}, 200);
					});
					return;
				}

				debounceTimer = setTimeout(() => {
					NavManager.onScrollFinished(headerRef, () => {
						headerRef.current?.classList.toggle(
							"md:-translate-y-16",
							window.scrollY > NavManager.currentScrollY + SCROLL_Y_THRESHOLD
						);
					});
				}, 200);
			};
			window.addEventListener("scroll", handleScroll);

			return () => {
				window.removeEventListener("scroll", handleScroll);
				clearTimeout(debounceTimer);
			};
		}, []);
	},
};
