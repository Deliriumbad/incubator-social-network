import React from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {RootStateReduxType} from "../../redux/redux-store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type DialogsPropsType = {
    sendMessage: (newMessageBody: string) => void
    updateNewMessageBody: (body: string) => void
    state: RootStateReduxType
    isAuth: boolean
}

type FormDataType = {
    newMessageBody: string
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const {state, sendMessage} = props;

    let dialogsPage = state.dialogsPage;

    const dialogsElements = dialogsPage.dialogs.map(el => <DialogItem name={el.name} id={el.id} key={el.id}/>)
    const messagesElements = dialogsPage.messages.map(el => <Message message={el.message} key={el.id}/>)

    const addNewMessage = (values: FormDataType) => {
        sendMessage(values.newMessageBody);
        console.log(values)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    );
}

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea'
                       name='newMessageBody'
                       placeholder='Enter your message'
                />
            </div>
                <button>Send</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormDataType>({
    form: 'dialogAddMessageForm'
})(AddMessageForm)