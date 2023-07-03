import Mypagination from "./Mypagination";

export default {
  title: "atoms/Pagination",
  component: Mypagination,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    currentPage: 5,
    totalPages: 60,
  },
};
