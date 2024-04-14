import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import loadable from "@loadable/component";
import useScrollPosition from "../../../customHooks/useScrollPosition";
const SideBarMenu = loadable(() => import("./SideBarMenu"));

const HamburgerMenu = ({ layoutData }) => {
  const [toggled, setToggled] = React.useState(false);

  const scrollPosition = useScrollPosition();

  let linkColor = "white";
  if (scrollPosition > window.innerHeight - 300) {
    linkColor = "black";
  }

  return (
    <>
      <div className="flex lg:hidden">
        <SideBarMenu
          toggled={toggled}
          setToggled={setToggled}
          layoutData={layoutData}
        />
        <main className="flex p-3">
          <div>
            <button
              aria-label="Menu"
              className={`sb-button border border-${linkColor} rounded ${toggled ? "opacity-0" : "opacity-100"}`}
              onClick={() => setToggled(!toggled)}
            >
              <Bars3Icon
                className={`h-7 md:h-9 text-${linkColor} ${toggled ? "opacity-0" : "opacity-100"}`}
              />
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default HamburgerMenu;
