/* eslint-disable react/prop-types */
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { defaultShouldDehydrateQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";





function CreateCabinForm({cabinToEdit={}}) {
const {id:editID,...editValues}=cabinToEdit
const isEditSession=Boolean(editId)

  const queryClient = useQueryClient();
  const { register, handleSubmit, reset, getValues, formState } = useForm(
    isEditSession ? { defaultValues: editValues } : {}
  );
  const { errors } = formState;
  const { mutate, isLoading: isCereating } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("Cabin created successfully");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    mutate({ ...data, image: data.image[0] });
  }
  // function onError(errors) {
  //   console.log(errors);
  // }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isCereating}
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="maxCapacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isCereating}
          {...register("maxCapacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "the capacity should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="regularPrice" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isCereating}
          {...register("regularPrice", {
            required: "This field is required",
            min: {
              value: 1,
              message: "the capacity should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isCereating}
          defaultValue={0}
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount should be less than the regular price  ",
          })}
        />
      </FormRow>

      <FormRow
        label="description for website"
        error={errors?.description?.message}
        disabled={isCereating}
      >
        <Textarea
          type="number"
          id="description"
          disabled={isCereating}
          defaultValue=""
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="cabin photo">
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCereating}>Add cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
