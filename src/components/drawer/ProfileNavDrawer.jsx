import { Camera, ClipboardText, SignOut, User } from "@phosphor-icons/react";
import { Avatar, Divider, Drawer, Upload } from "antd";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MY_ACCOUNT_PATH, MY_ORDERS_PATH } from "../../helper/slugs";
import { TextWithIcon } from "../TextWithIcon";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedOut } from "../../features/auth/authSlice";

export default function ProfileNavDrawer({ isNavOpen, setNavOpen }) {
  const { user } = useSelector((state) => state.auth);
  const [imageUrl, setImageUrl] = useState(user?.image);
  const dispatch = useDispatch();

  const handleUpload = (info) => {
    if (info.file.status === "done") {
      // Get this url from response in real world.
    }
    //TODO: Move this two line inside of the if statement after implementing image upload.
    const img = URL.createObjectURL(info.file.originFileObj);
    setImageUrl(img);
  };

  const handleDelete = () => {
    setImageUrl(null);
  };

  return (
    <Drawer
      open={isNavOpen}
      onClose={() => setNavOpen(false)}
      placement="bottom"
    >
      <div className="py-1">
        <div className="flex flex-col justify-center mb-10">
          <div className="relative w-24 h-24 mx-auto">
            <Avatar
              size={100}
              src={imageUrl}
              icon={!imageUrl && <Camera size={20} />}
              className="cursor-pointer"
            />
            <Upload
              showUploadList={false}
              onChange={handleUpload}
              className="bg-secondary absolute rounded-full w-7 h-7 -bottom-2 right-0 text-white text-xl flex justify-center items-center cursor-pointer"
            >
              <Camera />
            </Upload>
          </div>

          <h3 className="mt-4 font-medium text-center">{user.name}</h3>
        </div>
        <div className="flex flex-col gap-y-2 w-72 h-fit px-5">
          {profileLinks.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              onClick={() => setNavOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "font-bold bg-primary/15 text-black p-2 flex items-center gap-2 border border-secondary"
                  : "font-medium flex items-center gap-2 p-2 "
              }
            >
              <TextWithIcon text={item.label} icon={item.icon} />
            </NavLink>
          ))}
          <TextWithIcon
            className="text-error font-medium p-2"
            text="Logout"
            icon={<SignOut />}
            onClick={() => dispatch(userLoggedOut())}
          />
        </div>
      </div>
    </Drawer>
  );
}

const profileLinks = [
  {
    label: "My Account",
    path: MY_ACCOUNT_PATH,
    icon: <User />,
  },
  {
    label: "My Orders",
    path: MY_ORDERS_PATH,
    icon: <ClipboardText />,
  },
  // {
  //   label: "My Address",
  //   path: MY_ADDRESS_PATH,
  //   icon: <AddressBook />,
  // },
];
