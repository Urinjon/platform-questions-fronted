import { m } from "@paraglide/messages";
import { Navigation } from "./Navigation";
import { navHelpLinks } from "../model/nav.data";

export async function NavigationServer() {
	return <Navigation navHomeLabel={m.navHome()} helpLinks={navHelpLinks()} />;
}
