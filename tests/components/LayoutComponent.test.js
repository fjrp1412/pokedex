import { describe, test, expect } from "vitest";
import { mount, shallowMount } from "@vue/test-utils";
import LayoutComponent from "@components/Layout/LayoutComponent.vue";

describe("LayoutComponent.vue", () => {
  describe("Mount layout component", () => {
    const wrapper = shallowMount(LayoutComponent);
    test("it should render the layout base", () => {
      const component = wrapper.find("#layout");

      expect(component.exists()).toBe(true);
      expect(component.isVisible()).toBe(true);
    });
  });

  describe("Mount layout with it childrens components", () => {
    const wrapper = mount(LayoutComponent);
    test("it should render Layout component with header and footer components", () => {
      const headerComponent = wrapper.findComponent({
        name: "HeaderComponent",
      });
      const footerComponent = wrapper.findComponent({
        name: "FooterComponent",
      });

      expect(headerComponent.exists()).toBe(true);
      expect(footerComponent.exists()).toBe(true);
    });
  });
});
