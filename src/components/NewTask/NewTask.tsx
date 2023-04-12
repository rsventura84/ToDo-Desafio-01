import { Button } from "./Button/Button";
import { TextArea } from "./TextArea/TextArea";
import styles from "./NewTask.module.css";
import plus from "../../assets/plus.svg";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Task } from "./../Task/List/Task";
import { Info } from "../Task/Info/Info";
import { Empty } from "../Task/Empty/Empty";


export function NewTask() {
  const [comments, setComments] = useState<string[]>([]);
  const [newCommentText, setNewCommentText] = useState("");
  const [countDone, setCountDone] = useState(0);


  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatorio");
  }

  function deleteComment(commentToDelete: string) {
      const commentsWithoutDeleteOne = comments.filter((comment) => {
      return comment != commentToDelete;
    });
    
    setComments(commentsWithoutDeleteOne);
  }

  function countNumberDoneAdd() {
    setCountDone((state) => {
      return state + 1
    }
  )
  }

  function countNumberDoneSub() {
    setCountDone((state) => {
      return state - 1
    }
  )
  }
  const isNewCommentEmpyty = newCommentText.length == 0;

  return (
    <>
      <form onSubmit={handleCreateNewTask} className={styles.newtask}>
        <TextArea
          name="comment"
          placeholder="Deixe uma Task"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
          maxLength={60}
        />

        <Button
          name={"Criar"}
          image={plus}
          disabled={isNewCommentEmpyty}
          type="submit"
           />
      </form>
      <div>
        <Info countCreated={comments.length} countDone={countDone}/>
        {comments.length == 0 ? (
        <Empty />
      ) : (
        comments.map((comment) => {
          return (
            <Task
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
              onCheck={countNumberDoneAdd}
              onChecked={countNumberDoneSub}
            />
          );
        })
      )}
      </div>
      
    </>
  );
}

