import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import HomeView from "@views/HomeView.vue";

describe("HomeVue.vue", () => {
  describe("Mount Home Vue component", () => {
    const wrapper = mount(HomeView);
    test("It should render the main view component", () => {
      const component = wrapper.find("#main");
      expect(component.isVisible()).toBe(true);
    });
  });

  describe("Mount Home Vue view with all the layout", () => {
    const wrapper = mount(HomeView);
    test("It should render Layout as well as Home content", () => {
      const layoutComponent = wrapper.findComponent({
        name: "LayoutComponent",
      });
      const homeContent = wrapper.find("#main");

      expect(layoutComponent.exists()).toBe(true);
      expect(layoutComponent.isVisible()).toBe(true);
      expect(homeContent.isVisible()).toBe(true);
    });
  });
});
