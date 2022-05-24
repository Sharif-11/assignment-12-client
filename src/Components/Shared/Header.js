import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
const Header = () => {
	const [user, loading, error] = useAuthState(auth);
	const menuItem = (
		<>
			<li className="px-[6px]">
				<Link to="/">Home</Link>
			</li>

			{!user ? (
				<li className="px-[6px]">
					<Link to="/login">Login</Link>
				</li>
			) : (
				<li className="px-[6px]">
					<button onClick={() => signOut(auth)}>Logout</button>
				</li>
			)}
		</>
	);
	return (
		<div class="navbar bg-base-100 lg:flex lg:justify-center">
			<div class="navbar-start">
				<div class="dropdown">
					<label tabindex="0" class="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabindex="0"
						class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						{menuItem}
					</ul>
				</div>
				<a class="btn btn-ghost normal-case text-xl">Pc parts manufacturer</a>
			</div>
			<div class="navbar-center hidden lg:flex">
				<ul class="menu menu-horizontal p-0">{menuItem}</ul>
			</div>
		</div>
	);
};

export default Header;
