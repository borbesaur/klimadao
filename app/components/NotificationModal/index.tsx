import React, { FC, ReactElement } from "react";
import styles from "./index.module.css";
import AlarmIcon from "@mui/icons-material/Alarm";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

type StatusTypes = "success" | "failure" | "confirmation";

interface Props { }

interface ModalAssetTypes {
    [key: string]: {
        [key: string]: string | ReactElement;
    };
}

const modalAssets: ModalAssetTypes = {
    header: {
        success: "SUCCESS!",
        failure: "FAILURE!",
        confirmation: "CONFIRMATION",
    },
    message: {
        success: "You successfully staked KLIMA!",
        failure: "Transaction Failed",
        confirmation: "Transaction initiated. Waiting for network confirmation",
    },
    iconStyle: {
        success: styles.icon_success,
        failure: styles.icon_failure,
        confirmation: styles.icon_confirmation,
    },
    iconComponent: {
        success: <CheckIcon />,
        failure: <ErrorOutlineOutlinedIcon />,
        confirmation: <AlarmIcon />,
    },
};

export const NotificationModal: FC<Props> = () => {
    const status: string = "";
    if (!status) return null;

    const getAsset = (section: string, status: string): string | ReactElement => {
        return modalAssets[section][status];
    };

    const closeModal = function (): void {
        console.log("hiding");
    }

    return (
        <>
            <div className={styles.bg}>
                <div className={styles.card}>
                    <div className={styles.card_header}>
                        <p>{getAsset("header", status)}</p>
                        <button onClick={closeModal} className={styles.closeButton}>
                            <CloseIcon />
                        </button>
                    </div>
                    <div
                        className={`${styles.icon_container}  
            ${getAsset("iconStyle", status)}`}
                    >
                        {getAsset("iconComponent", status)}
                    </div>
                    <p className={styles.card_message}>{getAsset("message", status)}</p>
                </div>
            </div>
        </>
    );
};