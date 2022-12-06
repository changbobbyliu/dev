import { TNavSection } from "@/ui/widgets/header/nav/NavItemsList";
import { Dispatch, RefObject, SetStateAction, useEffect } from "react";

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

	public static states = {
		setActiveSection: null as Dispatch<SetStateAction<TNavSection>> | null,
	};

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

	public static smoothScrollTo(id: TNavSection, callback?: () => void) {
		if (!globalThis.document) return null;
		const dom = document.getElementById(id);
		return () => {
			this.enableScrollListener(false);
			this.states.setActiveSection?.(id);
			document.documentElement.scrollTo({
				top: dom?.offsetTop,
				behavior: "smooth",
			});
			callback?.();
		};
	}

	public static onScrollFinished({
		headerRef,
		callback,
	}: {
		headerRef: RefObject<HTMLElement>;
		callback?: () => void;
	}) {
		callback?.();
		this.updateCurrentScrollY();
		if (window.scrollY < SCROLL_Y_THRESHOLD) {
			headerRef.current?.classList.replace("bg-[#ffffffa0]", "bg-white");
		} else {
			headerRef.current?.classList.replace("bg-white", "bg-[#ffffffa0]");
		}
	}

	public static updateActiveSection() {
		const portfolioY = document.getElementById("portfolio")?.offsetTop || 0;
		const hobbyY = document.getElementById("hobby")?.offsetTop || 0;
		const scrollY = globalThis.scrollY;
		const currentSection = scrollY < portfolioY ? "home" : scrollY < hobbyY ? "portfolio" : "hobby";
		this.states.setActiveSection?.(currentSection);
	}
}

export const hooks = {
	useHideHeaderOnScroll: (
		setActiveSection: Dispatch<SetStateAction<TNavSection>>,
		headerRef: RefObject<HTMLElement>
	) => {
		useEffect(() => {
			if (!NavManager.states.setActiveSection) {
				NavManager.states.setActiveSection = setActiveSection;
			}

			let debounceTimer: NodeJS.Timer;
			const handleScroll = () => {
				clearTimeout(debounceTimer);

				// Do not hide when scrolling by tapping NavItem in NavItemsList
				if (!NavManager.isListeningToScroll) {
					debounceTimer = setTimeout(() => {
						NavManager.onScrollFinished({
							headerRef,
							callback: () => {
								NavManager.enableScrollListener();
							},
						});
					}, 200);
					return;
				}

				debounceTimer = setTimeout(() => {
					NavManager.onScrollFinished({
						headerRef,
						callback: () => {
							headerRef.current?.classList.toggle(
								"md:-translate-y-16",
								window.scrollY > NavManager.currentScrollY + SCROLL_Y_THRESHOLD
							);
							NavManager.updateActiveSection();
						},
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
