import {
  ADD_EDITORSTATE,
  CHANGE_EDITORSTATE
} from "../types/editorStateActionTypes";
// ListとMapを使います
import { List, Map } from "immutable";

export default function (state = List(), action) {
  switch (action.type) {
    case ADD_EDITORSTATE: {
      const { id, content } = action.payload;
      return state.push(
        // ListにMapを追加
        Map({
          id,
          content,
          completed: false
        })
      );
    }

    case CHANGE_EDITORSTATE: {
      const { id } = action.payload;
      return state.map((todo) => {
        // Listのmapで処理
        if (todo.get("id") === id) {
          return todo.update("completed", (v) => !v); // Mapのupdate
        }
        return todo;
      });
    }

    default:
      return state;
  }
}
