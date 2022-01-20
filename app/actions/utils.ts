import { AppNotificationStatus } from "state/app";

export type TxnStatus =
  | "userConfirmation"
  | "networkConfirmation"
  | "done"
  | "error"
  | "claimExceeded";

export type OnStatusHandler = (status: TxnStatus, message: string) => void;

export const getStatusMessage = (status: AppNotificationStatus) => {
  const { statusType, message } = status;
  if (statusType === "error" && message) {
    if (message === "userRejected") return "You chose to reject the transaction";
    else return "❌ Error: something went wrong...";
    // return message;
  } else if (statusType === "userConfirmation") {
    return "Please click 'confirm' in your wallet to continue.";
  } else if (statusType === "networkConfirmation") {
    return "Transaction initiated. Waiting for network confirmation.";
  } else if (statusType === "done") {
    if (message) return message;
    return "✔️ Success!";
  }
  return null;
};
