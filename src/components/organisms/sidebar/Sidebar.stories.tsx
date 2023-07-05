import type { Meta, StoryObj } from "@storybook/react";
import Sidebar from "./Sidebar";
import { BrowserRouter } from "react-router-dom";
import Homesvg from "../../../assets/home_svg.svg";
import Roapmapsvg from "../../../assets/roadmap_svg.svg";
import Studysvg from "../../../assets/study_svg.svg";
import Blogsvg from "../../../assets/blog_svg.svg";
import { EditOutlined } from "@ant-design/icons";


const meta = {
  title: "Organisms/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = () => (
    <BrowserRouter>
      <Sidebar
        sidebarItem={[
            { id: 0, link: "/", svg: Homesvg, name: "Home" },
            { id: 1, link: "/roadmap", svg: Roapmapsvg, name: "Lộ trình" },
            { id: 2, link: "/study", svg: Studysvg, name: "Học" },
            { id: 3, link: "/blogs", svg: Blogsvg, name: "Blogs" },
          ]}
          sidebarPopOver={
            <div className="sidebar_popOver">
              <EditOutlined /> <span>Viet Blog</span>
            </div>
          }
      />
    </BrowserRouter>
  );
  