import produce from "immer";

test("immer play", () => {

  const state = {
    user: {
      age: 1
    }
  }

  const curriedProduce = produce(draft => {
    draft.user.age += 1
  });

  const res = curriedProduce(state);

  expect(state.user.age).toBe(1);
  expect(res.user.age).toBe(2);

});

