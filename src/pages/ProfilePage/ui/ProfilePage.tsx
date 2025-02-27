import { classNames } from "@/shared/lib/classNames/classNames";

import { Page } from "@/widgets/Page/Page";
import { VStack } from "@/shared/ui/Stack/VStack/VStack";
import { EditableProfileCard } from "@/features/editableProfileCard";
import { useParams } from "react-router-dom";
import { Text } from "@/shared/ui/Text/Text";

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{ id: string }>();

    if (!id) {
        // eslint-disable-next-line i18next/no-literal-string
        return <Text text="id is missing" />;
    }
    return (
        <Page className={classNames("", {}, [className])}>
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
