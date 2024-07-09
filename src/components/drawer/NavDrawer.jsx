import { Drawer } from "antd";
import Brand from "../Brand";
import { navItems } from "../../constant";
import { NavLink } from "react-router-dom";

export default function NavDrawer({ isOpen, setOpen }) {
  return (
    <Drawer
      title={<Brand size="lg" />}
      onClose={() => setOpen(false)}
      open={isOpen}
      placement="left"
      width={250}
      closeIcon={null}
      classNames={{ body: "bg-black text-white", header: "bg-black" }}
    >
      <div className="flex flex-col gap-y-6">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "font-bold text-primary hover:text-primary flex items-center gap-1"
                : "font-medium flex items-center gap-1"
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
      <div>
        
      </div>
    </Drawer>
  );
}
