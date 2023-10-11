import { createSlice } from "@reduxjs/toolkit";

import { Data } from "@/data";

const initialState = {
  projects: Data,
  selectedCategory: "all",
};

const projectsSlice = createSlice({
  name: "filteredProjects",
  initialState,
  reducers: {
    filterProjects: (state, action) => {
      const selectedCategory = action.payload;
      let filteredProjects;

      if (selectedCategory === "all") {
        // If 'all' is selected, show all projects
        filteredProjects = Data;
      } else {
        // Otherwise, filter projects by the selected category
        filteredProjects = Data.filter(
          (item) => item.category === selectedCategory
        );
      }

      // Update the state with the filtered projects and selected category
      return { ...state, projects: filteredProjects, selectedCategory };
    },
  },
});

export const { filterProjects } = projectsSlice.actions;
export default projectsSlice.reducer;
