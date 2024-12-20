import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
    addCommentFormActions,
    addCommentFormReducer,
} from "../../model/slices/addCommentForm";
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from "../../model/selectors/addCommentFormSelectors";
import cls from "./AddCommentForm.module.scss";
import { HStack } from "shared/ui/Stack";

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (val: string) => void;
}
const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation("profile");
    const dispatch = useAppDispatch();

    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch]
    );

    const onSendHandler = useCallback(() => {
        onSendComment(text || "");
        onCommentTextChange("");
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <HStack
                justify="between"
                max
                className={classNames(cls.AddCommentForm, {}, [className])}
            >
                <Input
                    placeholder={t("Enter comment text")}
                    value={text}
                    className={cls.input}
                    onChange={onCommentTextChange}
                />
                <Button onClick={onSendHandler} theme={ButtonTheme.OUTLINE}>
                    {t("Send")}
                </Button>
            </HStack>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
