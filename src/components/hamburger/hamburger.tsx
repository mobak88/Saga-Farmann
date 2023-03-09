import Link from "next/link";
import {useState} from "react";
import styles from "./hamburger.module.css";

type HamburgerProps = {
	links: {href: string; label: string}[];
};

const Hamburger = ({links}: HamburgerProps) => {
	const [isActive, setIsActive] = useState<Boolean>(false);
	let text: string = "Burgermenu";

	return (
		<nav className={styles["hamburger_container"]}>
			<div
				className={styles["hamburger_wrapper"]}
				onClick={() => {
					setIsActive(!isActive);
				}}
			>
				{text}
			</div>
			<div
				className={`${
					isActive ? styles["hamburger_active"] : [""]
				} styles[link_wrapper]`}
			>
				{isActive
					? links.map(({href, label}) => (
							<div className={styles["hamburger_link"]} key={href}>
								<Link href={href}>
									<>{label}</>
								</Link>
							</div>
					  ))
					: ""}
			</div>
		</nav>
	);
};

export default Hamburger;
