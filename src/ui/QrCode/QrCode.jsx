import styles from "./QrCode.module.css";
import qrCode from "@content/qr-code/qr-code.svg";
import qrCode2 from "@content/qr-code/qr-code2.svg";

export default function QrCode({ plug, style, qr2 }) {
  return (
    <img
      className={`${styles.img} ${plug && styles.plug}`}
      style={style}
      src={qr2 ? qrCode2 : qrCode}
      alt="Qr-code"
    />
  );
}
