import {Drawer} from "antd";

export default function FilterDrawer({
                                         isFilterOpen,
                                         setFilterOpen,
                                         children
                                     }) {

    return (
        <Drawer
            title="Filter Products"
            open={isFilterOpen}
            className="bg-black"
            onClose={() => setFilterOpen(false)}
            placement="left"
            width={240}
            styles={{
                body:{
                    backgroundColor: "#f3f4f6",
                    color: "#fff",
                    margin: 0,
                    padding: 5
                },
            }}
            closeIcon={true}
        >
           <div>
               {children}
           </div>
        </Drawer>
    );
}