import { describe, test, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import HeaderComponent from "@components/Header/HeaderComponent.vue";

describe("HeaderComponent.vue", () => {
  describe("mount header component alone", () => {
    const wrapper = shallowMount(HeaderComponent);
    test("header component should be mounted", () => {
      const component = wrapper.find("#header");
      const title = wrapper.find(".logo");

      expect(component.exists()).toBe(true);
      expect(component.isVisible()).toBe(true);
      expect(title.isVisible()).toBe(true);
      expect(title.exists()).toBe(true);
    });
  });
});
