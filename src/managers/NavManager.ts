import { RefObject, useEffect, useRef } from "react";

// NavBar.height: 64px | 4rem | h-16
// Hide on scroll threshold: 30px
const SCROLL_Y_THRESHOLD = 30;

export class NavManager {
	/**
	 * Used to control the hide on scroll behavior of the navbar header
	 */
	private static shouldListenToScroll = true;

	static get isListeningToScroll() {
		return this.shouldListenToScroll;
	}

	public static enableScrollListener(enabled = true) {
		this.shouldListenToScroll = enabled;
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
}

export const hooks = {
	useHideHeaderOnScroll: (headerRef: RefObject<HTMLElement>) => {
		const navTopRef = useRef(0);

		useEffect(() => {
			let debounceTimer: NodeJS.Timer;
			const handleScroll = () => {
				clearTimeout(debounceTimer);

				// Do not hide when scrolling by tapping NavItem in NavItemsList
				if (!NavManager.isListeningToScroll) {
					debounceTimer = setTimeout(() => {
						NavManager.enableScrollListener();
						navTopRef.current = window.scrollY;
					}, 200);
					return;
				}

				debounceTimer = setTimeout(() => {
					headerRef.current?.classList.toggle(
						"md:-translate-y-16",
						window.scrollY > navTopRef.current + SCROLL_Y_THRESHOLD
					);
					navTopRef.current = window.scrollY;
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
