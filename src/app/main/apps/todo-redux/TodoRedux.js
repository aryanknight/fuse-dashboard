import React, { useEffect, useState } from "react";
import FusePageSimple from "@fuse/core/FusePageSimple";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { addTodo, deleteTodo, selectTodoList } from "app/store/todoSlice";
import { useDispatch } from "react-redux";

const Root = styled(FusePageSimple)(({ theme }) => ({
  "& .FusePageSimple-header": {
    backgroundColor: theme.palette.background.paper,
    boxShadow: `inset 0 0 0 1px  ${theme.palette.divider}`,
  },
}));

export default function TodoRedux() {
  const todoList = useSelector(selectTodoList);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  
  const handleSubmit = () => {
    dispatch(addTodo(value));
    setValue("");
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <Root
      content={
        <div className="w-full h-[100vh] p-[2rem]">
          <div className="flex justify-center p-[1rem] ">
            <input
              className="w-[40%] p-[1rem] outline-none border-none rounded-4 text-[18px]"
              value={value}
              onChange={handleInputChange}
            />
            <button
              className="p-[1rem] bg-blue-600 text-white ml-[10px] rounded-2"
              onClick={handleSubmit}
            >
              Add Task
            </button>
          </div>
          <div className="mt-[40px] p-[1rem] ">
            {todoList.map((todo) => (
              <div
                key={todo}
                className="bg-white mb-[12px] p-[1rem] text-[20px] rounded-2 flex justify-between"
              >
                <span>{todo}</span>
                <span className="text-red-500 cursor-pointer" onClick={(e)=>handleDelete(todo)}>Delete</span>
              </div>
            ))}
          </div>
        </div>
      }
    />
  );
}
