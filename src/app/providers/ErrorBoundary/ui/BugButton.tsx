import { Button } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
// Компонент для тестирования ErrorBoundary
const BugButton = () => {
    const { t } = useTranslation();
    const [error, setError] = useState(false);
    const onThrow = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return <Button onClick={onThrow}>{t("Сгенерировать ошибку")}</Button>;
};
export default BugButton;
