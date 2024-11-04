import React from "react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { Controller, useForm } from "react-hook-form";
import { AiOutlineShoppingCart } from "react-icons/ai";

import products from "@/src/constans/products";
import { TItem, TPaymentMethod } from "@/src/types";
import paymentMethods from "@/src/constans/paymentMethod";

type TProps = {
  items: (typeof products)[number]["items"];
  selectedItem: TItem | undefined;
  itemsVisible: boolean;
  handleSelectedItem: (item: TItem) => void;
};

type TForm = {
  userId: string;
  paymentMethod: TPaymentMethod;
};

const PostInteractionSection = (post: TProps) => {
  const { items, itemsVisible, selectedItem, handleSelectedItem } = post;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
    watch,
  } = useForm<TForm>();

  const { paymentMethod } = watch();

  const handleCheckoutClick = () => {
    onOpen();
  };

  const onSubmit = (data: TForm) => {
    console.log("🚀 ~ onSubmit ~ data:", data);
  };

  const onCloseModal = () => {
    reset();
  };

  return (
    <div className="flex flex-col rounded-lg">
      {/* items Section */}
      <div
        className={` rounded-lg shadow-sm overflow-hidden ${itemsVisible ? "max-h-96" : "max-h-0"} transition-all duration-500 ease-in-out transform ${itemsVisible ? "translate-y-0 " : "-translate-y"}`}
      >
        {items.map((item, index) => (
          <button
            key={index}
            className="w-full bg-default-100 rounded-md shadow-sm mb-2"
            onClick={() => handleSelectedItem(item)}
          >
            <div
              className={`px-2 py-2 rounded-md justify-between items-center flex  ${selectedItem === item ? "border-1 border-primary-500" : ""}`}
            >
              <h3 className="text-sm font-semibold">
                {item.unit} {item.qty}
              </h3>
              <h3 className="text-sm">
                {"Rp."} {item.price}
              </h3>
            </div>
          </button>
        ))}
        <Button
          className={`bg-default-100 w-full mt-4 transition-transform duration-300 ${
            selectedItem ? "text-primary-500 " : "text-default-500"
          }`}
          disabled={!selectedItem}
          startContent={<AiOutlineShoppingCart />}
          onClick={handleCheckoutClick}
        >
          Checkout
        </Button>
      </div>

      {/* Modal for user not logged in */}
      <Modal isOpen={isOpen} onClose={onCloseModal} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader>Checkout</ModalHeader>
          <ModalBody>
            <Controller
              control={control}
              name="userId"
              render={({ field }) => (
                <Input
                  errorMessage={errors.userId?.message}
                  isInvalid={Boolean(errors.userId)}
                  label="User ID"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
              rules={{ required: "User ID is required" }}
            />

            <Controller
              control={control}
              name="paymentMethod"
              render={({ field }) => (
                <>
                  {paymentMethods.map((payment, index) => (
                    <button
                      key={index}
                      className="w-fit bg-default-100 rounded-md shadow-sm mb-2"
                      onClick={() => {
                        field.onChange(payment);
                      }}
                    >
                      <div
                        className={`px-2 py-2 rounded-md justify-between items-center flex  ${paymentMethod === payment ? "border-1 border-primary-500" : ""}`}
                      >
                        <img
                          alt={payment.title}
                          className="w-10 h-10 rounded-full mr-3"
                          src={payment.photo}
                        />
                        <h3 className="text-sm font-semibold">
                          {payment.title}
                        </h3>
                      </div>
                    </button>
                  ))}
                </>
              )}
              rules={{ required: "Payment Method is required" }}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleSubmit(onSubmit)}>
              Bayar
            </Button>
            <Button color="secondary" onPress={onOpenChange}>
              Batal
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default PostInteractionSection;
