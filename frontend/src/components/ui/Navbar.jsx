import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, FileText, Menu, X } from "lucide-react";

/* shadcn-style cn helper */
const cn = (...classes) => classes.filter(Boolean).join(" ");

const NAV_ITEMS = [
	{ name: "Home", path: "/", icon: Home },
	{ name: "Rent Property", path: "/rent-property", icon: Briefcase },
	{ name: "Sale Property", path: "/sale-property", icon: Briefcase },
	{ name: "Book Enquiry", path: "/book-enquiry", icon: FileText },
	{ name: "Interior", path: "/interior", icon: Home },
	{ name: "About Us", path: "/about", icon: User },
];

export default function Navbar() {
	const location = useLocation();
	const [activeTab, setActiveTab] = useState(NAV_ITEMS[0].name);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	/* Sync active tab with route */
	useEffect(() => {
		const current = NAV_ITEMS.find((item) => item.path === location.pathname);
		if (current) setActiveTab(current.name);
	}, [location.pathname]);

	/* Close mobile menu on route change */
	useEffect(() => {
		setMobileMenuOpen(false);
	}, [location.pathname]);

	return (
		<>
			{/* Desktop Navbar */}
			<div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
				<div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/50 backdrop-blur-lg px-1 py-1 shadow-xl">
					{NAV_ITEMS.map((item) => {
						const Icon = item.icon;
						const isActive = activeTab === item.name;

						return (
							<Link
								key={item.name}
								to={item.path}
								onClick={() => setActiveTab(item.name)}
								className={cn(
									"relative flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition-colors",
									"text-white/70 hover:text-white",
									isActive && "text-white"
								)}
							>
								<span>{item.name}</span>

								{/* Tubelight glow */}
								{isActive && (
									<motion.div
										layoutId="tubelight"
										className="absolute inset-0 -z-10 rounded-full bg-blue-500/15"
										transition={{
											type: "spring",
											stiffness: 280,
											damping: 30,
										}}
									>
										<div className="absolute -top-2 left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full bg-blue-500">
											<div className="absolute -top-2 -left-2 h-6 w-12 rounded-full bg-blue-500/20 blur-md" />
											<div className="absolute -top-1 h-6 w-8 rounded-full bg-blue-500/20 blur-md" />
										</div>
									</motion.div>
								)}
							</Link>
						);
					})}
				</div>
			</div>

			{/* Mobile Hamburger Button */}
			<div className="fixed top-6 right-6 z-50 md:hidden">
				<button
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-black/50 backdrop-blur-lg shadow-xl text-white/70 hover:text-white transition-colors"
				>
					{mobileMenuOpen ? (
						<X size={22} strokeWidth={2.5} />
					) : (
						<Menu size={22} strokeWidth={2.5} />
					)}
				</button>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ type: "spring", stiffness: 300, damping: 30 }}
						className="fixed top-24 left-4 right-4 z-50 md:hidden"
					>
						<div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-black/50 backdrop-blur-lg px-2 py-2 shadow-xl">
							{NAV_ITEMS.map((item) => {
								const Icon = item.icon;
								const isActive = activeTab === item.name;

								return (
									<Link
										key={item.name}
										to={item.path}
										onClick={() => {
											setActiveTab(item.name);
											setMobileMenuOpen(false);
										}}
										className={cn(
											"relative flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors",
											"text-white/70 hover:text-white",
											isActive && "text-white"
										)}
									>
										<Icon size={18} strokeWidth={2.5} />
										<span>{item.name}</span>

										{/* Tubelight glow for mobile */}
										{isActive && (
											<motion.div
												layoutId="tubelight-mobile"
												className="absolute inset-0 -z-10 rounded-xl bg-blue-500/15"
												transition={{
													type: "spring",
													stiffness: 280,
													damping: 30,
												}}
											>
												<div className="absolute -top-1 left-6 h-1 w-8 rounded-t-full bg-blue-500">
													<div className="absolute -top-2 -left-2 h-6 w-12 rounded-full bg-blue-500/20 blur-md" />
													<div className="absolute -top-1 h-6 w-8 rounded-full bg-blue-500/20 blur-md" />
												</div>
											</motion.div>
										)}
									</Link>
								);
							})}
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Backdrop overlay for mobile menu */}
			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setMobileMenuOpen(false)}
						className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
					/>
				)}
			</AnimatePresence>
		</>
	);
}
