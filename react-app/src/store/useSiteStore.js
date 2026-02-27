import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools, persist } from "zustand/middleware";
import initialData from "../data/siteData";

const useSiteStore = create(
  devtools(
    persist(
      immer((set, get) => ({
        data: initialData,

        // --- Hero ---
        updateHero: (field, value) =>
          set((state) => {
            state.data.hero[field] = value;
          }),

        updateSocialLink: (id, field, value) =>
          set((state) => {
            const link = state.data.hero.socialLinks.find((l) => l.id === id);
            if (link) link[field] = value;
          }),

        addSocialLink: (link) =>
          set((state) => {
            state.data.hero.socialLinks.push(link);
          }),

        removeSocialLink: (id) =>
          set((state) => {
            state.data.hero.socialLinks = state.data.hero.socialLinks.filter(
              (l) => l.id !== id
            );
          }),

        // --- About ---
        updateAboutTitle: (title) =>
          set((state) => {
            state.data.about.title = title;
          }),

        updateAboutParagraph: (index, value) =>
          set((state) => {
            state.data.about.paragraphs[index] = value;
          }),

        addAboutParagraph: (text) =>
          set((state) => {
            state.data.about.paragraphs.push(text);
          }),

        removeAboutParagraph: (index) =>
          set((state) => {
            state.data.about.paragraphs.splice(index, 1);
          }),

        updateStat: (id, field, value) =>
          set((state) => {
            const stat = state.data.about.stats.find((s) => s.id === id);
            if (stat) stat[field] = value;
          }),

        // --- Skills ---
        updateSkillCategory: (id, field, value) =>
          set((state) => {
            const cat = state.data.skills.categories.find((c) => c.id === id);
            if (cat) cat[field] = value;
          }),

        addSkillItem: (categoryId, item) =>
          set((state) => {
            const cat = state.data.skills.categories.find(
              (c) => c.id === categoryId
            );
            if (cat) cat.items.push(item);
          }),

        removeSkillItem: (categoryId, itemIndex) =>
          set((state) => {
            const cat = state.data.skills.categories.find(
              (c) => c.id === categoryId
            );
            if (cat) cat.items.splice(itemIndex, 1);
          }),

        addSkillCategory: (category) =>
          set((state) => {
            state.data.skills.categories.push(category);
          }),

        removeSkillCategory: (id) =>
          set((state) => {
            state.data.skills.categories = state.data.skills.categories.filter(
              (c) => c.id !== id
            );
          }),

        // --- Projects ---
        updateProject: (id, field, value) =>
          set((state) => {
            const project = state.data.projects.items.find((p) => p.id === id);
            if (project) project[field] = value;
          }),

        addProject: (project) =>
          set((state) => {
            state.data.projects.items.push(project);
          }),

        removeProject: (id) =>
          set((state) => {
            state.data.projects.items = state.data.projects.items.filter(
              (p) => p.id !== id
            );
          }),

        // --- Footer ---
        updateFooter: (field, value) =>
          set((state) => {
            state.data.footer[field] = value;
          }),

        // --- Reset ---
        resetToDefaults: () =>
          set((state) => {
            state.data = initialData;
          }),
      })),
      { name: "site-data-storage" }
    ),
    { name: "SiteStore" }
  )
);

export default useSiteStore;
