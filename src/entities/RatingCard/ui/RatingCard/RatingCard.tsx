import { useTranslation } from "react-i18next";
import { memo, useCallback, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./RatingCard.module.scss";
import { Card } from "@/shared/ui/Card/Card";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text/Text";
import { StarRating } from "@/shared/ui/StarRating/StarRating";
import { Modal } from "@/shared/ui/Modal/Modal";
import { Input } from "@/shared/ui/Input/Input";
import { Button, ButtonSize, ButtonTheme } from "@/shared/ui/Button/Button";
import { Drawer } from "@/shared/ui/Drawer/Drawer";

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const { className, title, feedbackTitle, hasFeedback, onCancel, onAccept } =
        props;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStartCount] = useState(0);
    const [feedback, setFeedback] = useState("");

    const { t } = useTranslation();

    const onSelectStart = useCallback(
        (selectedStarsCount: number) => {
            setStartCount(selectedStarsCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [hasFeedback, onAccept]
    );

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandler = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input
                value={feedback}
                onChange={setFeedback}
                placeholder={t("Your feedback")}
            />
        </>
    );

    return (
        <Card className={classNames(cls.RatingCard, {}, [className])}>
            <VStack align="center" gap="8">
                <Text title={title} />
                <StarRating size={40} onSelect={onSelectStart} />
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen} lazy>
                    <VStack gap="32" max>
                        {modalContent}
                        <HStack max gap="16" justify="end">
                            <Button
                                theme={ButtonTheme.OUTLINE_RED}
                                onClick={cancelHandler}
                            >
                                {t("Close")}
                            </Button>
                            <Button onClick={acceptHandler}>{t("Send")}</Button>
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} lazy>
                    <VStack gap="32">
                        {modalContent}
                        <Button
                            onClick={acceptHandler}
                            size={ButtonSize.L}
                            fullWidth
                        >
                            {t("Send")}
                        </Button>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    );
});
