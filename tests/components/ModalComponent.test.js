import { describe, test, expect, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";
import ModalComponent from "@components/Modal/ModalComponent.vue";

describe("ModalComponent.vue", () => {
  describe("Mount modal component", () => {
    const wrapper = shallowMount(ModalComponent, {
      propsData: {
        show: true,
      },
    });

    test("It should render the Modal and Overlay components", () => {
      const modalComponent = wrapper.find("#modal");
      const overlayComponent = wrapper.find("#overlay");

      expect(modalComponent.exists()).toBe(true);
      expect(overlayComponent.exists()).toBe(true);
    });

    test("It should not render the Modal component if show isn't true", async () => {
      await wrapper.setProps({ show: false });

      const modalComponent = wrapper.find("#modal");
      const overlayComponent = wrapper.find("#overlay");
      expect(modalComponent.exists()).toBe(false);
      expect(overlayComponent.exists()).toBe(false);
    });
  });

  describe("Modal component events", () => {
    const wrapper = shallowMount(ModalComponent);
    test("It should call toggle Modal method", async () => {
      const toggleModal = vi.fn();

      await wrapper.setProps({ show: true, toggleShow: toggleModal });

      await wrapper.find("#overlay").trigger("click");

      expect(toggleModal).toHaveBeenCalled();
    });
  });
});
