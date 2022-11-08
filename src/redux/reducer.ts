export default function handleExpensive(state = { value: 0 }, action: any) {
  switch (action.type) {
    case "ADD":
      return { value: state.value + 1 };
    case "REMOVE":
      return { value: state.value - 1 };
    default:
      return state;
  }
}
