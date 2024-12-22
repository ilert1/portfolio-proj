import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";
import { ListBox } from "shared/ui/ListBox/ListBox";
import { HStack } from "shared/ui/Stack";
import { Page } from "widgets/Page/Page";

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState("");

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <Page>
            {t("Главная страница")}
            <HStack>
                <div>aaa</div>
                <ListBox
                    defaultValue="Choose value"
                    onChange={(value: string) => {}}
                    value={undefined}
                    items={[
                        { value: "1", content: "123" },
                        { value: "2", content: "1234" },
                        { value: "3", content: "1235", disabled: true },
                    ]}
                />
            </HStack>
        </Page>
    );
};

export default MainPage;
