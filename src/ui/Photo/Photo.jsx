import styles from "./Photo.module.css";
import developerPhoto1 from "@content/developer/1.png";
import developerPhoto2 from "@content/developer/2.png";
import developerPhoto3 from "@content/developer/3.png";
import developerPhoto4 from "@content/developer/4.png";
import developerPhoto5 from "@content/developer/5.png";
import developerPhoto6 from "@content/developer/6.png";
import developerPhoto7 from "@content/developer/7.png";
import integratorPhoto1 from "@content/integrator/1.png";
import integratorPhoto2 from "@content/integrator/2.png";
import integratorPhoto3 from "@content/integrator/3.png";
import integratorPhoto4 from "@content/integrator/4.png";
import integratorPhoto5 from "@content/integrator/5.png";
import integratorPhoto6 from "@content/integrator/6.png";
import integratorPhoto7 from "@content/integrator/7.png";
import managementCompany1 from "@content/management-company/1.png";
import managementCompany2 from "@content/management-company/2.png";
import managementCompany3 from "@content/management-company/3.png";
import managementCompany4 from "@content/management-company/4.png";
import managementCompany5 from "@content/management-company/5.png";
import managementCompany6 from "@content/management-company/6.png";
import managementCompany7 from "@content/management-company/7.png";

import { useLocation } from "react-router";

const photos = {
  developer: {
    1: developerPhoto1,
    2: developerPhoto2,
    3: developerPhoto3,
    4: developerPhoto4,
    5: developerPhoto5,
    6: developerPhoto6,
    7: developerPhoto7,
  },
  integrator: {
    1: integratorPhoto1,
    2: integratorPhoto2,
    3: integratorPhoto3,
    4: integratorPhoto4,
    5: integratorPhoto5,
    6: integratorPhoto6,
    7: integratorPhoto7,
  },
  "management-company": {
    1: managementCompany1,
    2: managementCompany2,
    3: managementCompany3,
    4: managementCompany4,
    5: managementCompany5,
    6: managementCompany6,
    7: managementCompany7,
  },
};

export default function Photo({ id }) {
  const location = useLocation();
  const pageType = location.pathname.split("/")[1];
  const imagePath = photos[pageType]?.[id];

  return (
    <div>
      <img className={styles.img} src={imagePath} alt="Photo" />
    </div>
  );
}
