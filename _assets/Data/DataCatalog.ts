import { IOfferMobileData } from "../variables/types";
import {
  wifi,
  mobile,
  sms,
  checked,
  agenda,
  equipement,
  share,
  satisfaction,
  phoneCall,
} from "../svgs";
import { useTranslation } from "@/app/i18n/client";
export function Data({ params: { lng } }: { params: { lng: string } }) {
  const { t } = useTranslation(lng, "ftth");
  const data = [
    {
      id: 0,
      productName: `${t("card.productName")}`,
      subTitle: `20 ${t("card.subTitle")}`,
      subMention: "",
      familyName: "ftth",
      familyCode: "string",
      fees: {
        commissioningFees: 49,
        provisionFees: 0,
        installationFees: 0,
        title: "attribute",
        description: "attribute description",
        value: "0",
        icon: checked,
        position: 2,
        principal: true,
      },
      price: 124.5,
      options: [
        {
          title: `${t("card.options.title")}`,
          description: "",
          value: `${t("card.options.value")}`,
          icon: share,
          price: 100,
          showPrice: true,
          enabled: true,
        },
      ],
      attributes: [
        {
          title: `${t("card.attributes.0.title")}`,
          description: `${t("card.attributes.0.description")}`,
          value: `${t("card.attributes.0.value")}`,
          icon: phoneCall,
          position: 2,
          principal: true,
        },
        {
          title: `${t("card.attributes.1.title")}`,
          description: `${t("card.attributes.1.description")}`,
          value: `${t("card.attributes.1.value")}`,
          icon: phoneCall,
          position: 2,
          principal: true,
        },
        {
          title: `${t("card.attributes.2.title")}`,
          description: `${t("card.attributes.2.description")}`,
          value: `${t("card.attributes.2.value")}`,
          icon: mobile,
          position: 2,
          principal: true,
        },
        {
          title: `${t("card.attributes.3.title")}`,
          description: `${t("card.attributes.3.description")}`,
          value: `${t("card.attributes.3.value")}`,
          icon: agenda,
          position: 2,
          principal: false,
        },
        {
          title: `${t("card.attributes.4.title")}`,
          description: `${t("card.attributes.4.description")}`,
          value: `${t("card.attributes.4.value")}`,
          icon: equipement,
          position: 2,
          principal: false,
        },
        {
          title: `${t("card.attributes.5.title")}`,
          description: `${t("card.attributes.5.description")}`,
          value: `${t("card.attributes.5.value")}`,
          icon: satisfaction,
          position: 2,
          principal: false,
        },
      ],
    },
    {
      id: 1,
      productName: `${t("card.productName")}`,
      subTitle: `50 ${t("card.subTitle")}`,
      subMention: "",
      familyName: "ftth",
      familyCode: "string",
      fees: {
        commissioningFees: 49,
        provisionFees: 0,
        installationFees: 0,
        title: "attribute",
        description: "attribute description",
        value: "0",
        icon: checked,
        position: 2,
        principal: true,
      },
      price: 174.5,
      options: [
        {
          title: `${t("card.options.title")}`,
          description: "",
          value: `${t("card.options.value")}`,
          icon: share,
          price: 100,
          showPrice: true,
          enabled: false,
        },
      ],
      attributes: [
        {
          title: `${t("card.attributes.0.title")}`,
          description: `${t("card.attributes.0.description")}`,
          value: `${t("card.attributes.0.value")}`,
          icon: phoneCall,
          position: 2,
          principal: true,
        },
        {
          title: `${t("card.attributes.1.title")}`,
          description: `${t("card.attributes.1.description")}`,
          value: `${t("card.attributes.1.value")}`,
          icon: phoneCall,
          position: 2,
          principal: true,
        },
        {
          title: `${t("card.attributes.2.title")}`,
          description: `${t("card.attributes.2.description")}`,
          value: `${t("card.attributes.2.value")}`,
          icon: mobile,
          position: 2,
          principal: true,
        },
        {
          title: `${t("card.attributes.3.title")}`,
          description: `${t("card.attributes.3.description")}`,
          value: `${t("card.attributes.3.value")}`,
          icon: agenda,
          position: 2,
          principal: false,
        },
        {
          title: `${t("card.attributes.4.title")}`,
          description: `${t("card.attributes.4.description")}`,
          value: `${t("card.attributes.4.value")}`,
          icon: equipement,
          position: 2,
          principal: false,
        },
        {
          title: `${t("card.attributes.5.title")}`,
          description: `${t("card.attributes.5.description")}`,
          value: `${t("card.attributes.5.value")}`,
          icon: satisfaction,
          position: 2,
          principal: false,
        },
      ],
    },

    {
      id: 2,
      productName: `${t("card.productName")}`,
      subTitle: `100 ${t("card.subTitle")}`,
      subMention: "",
      familyName: "ftth",
      familyCode: "string",
      fees: {
        commissioningFees: 49,
        provisionFees: 0,
        installationFees: 0,
        title: "attribute",
        description: "attribute description",
        value: "0",
        icon: checked,
        position: 2,
        principal: true,
      },
      price: 349,
      options: [
        {
          title: `${t("card.options.title")}`,
          description: "",
          value: `${t("card.options.value")}`,
          icon: share,
          price: 100,
          showPrice: true,
          enabled: false,
        },
      ],
      attributes: [
        {
          title: `${t("card.attributes.0.title")}`,
          description: `${t("card.attributes.0.description")}`,
          value: `${t("card.attributes.0.value")}`,
          icon: phoneCall,
          position: 2,
          principal: true,
        },
        {
          title: `${t("card.attributes.1.title")}`,
          description: `${t("card.attributes.1.description")}`,
          value: `${t("card.attributes.1.value")}`,
          icon: phoneCall,
          position: 2,
          principal: true,
        },
        {
          title: `${t("card.attributes.2.title")}`,
          description: `${t("card.attributes.2.description")}`,
          value: `${t("card.attributes.2.value")}`,
          icon: mobile,
          position: 2,
          principal: true,
        },
        {
          title: `${t("card.attributes.3.title")}`,
          description: `${t("card.attributes.3.description")}`,
          value: `${t("card.attributes.3.value")}`,
          icon: agenda,
          position: 2,
          principal: false,
        },
        {
          title: `${t("card.attributes.4.title")}`,
          description: `${t("card.attributes.4.description")}`,
          value: `${t("card.attributes.4.value")}`,
          icon: equipement,
          position: 2,
          principal: false,
        },
        {
          title: `${t("card.attributes.5.title")}`,
          description: `${t("card.attributes.5.description")}`,
          value: `${t("card.attributes.5.value")}`,
          icon: satisfaction,
          position: 2,
          principal: false,
        },
      ],
    },
  ];

  return data;
}
