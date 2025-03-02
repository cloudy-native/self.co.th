import { IconType } from "react-icons";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export interface ContactInfo {
  title: string;
  titleKey: string;
  value: string;
  thaiValue?: string;
  icon: IconType;
}

export const CONTACT_INFO: ContactInfo[] = [
  {
    title: "Email",
    titleKey: "contact.email",
    value: "hello@self.co.th",
    icon: FaEnvelope
  },
  {
    title: "Phone",
    titleKey: "contact.phone",
    value: "+66 2 123 4567",
    icon: FaPhone
  },
  {
    title: "Address",
    titleKey: "contact.address",
    value: "123 Sukhumvit Rd, Bangkok 10110, Thailand",
    thaiValue: "Lorem ipsum dolor sit amet, 10110, Lorem ipsum",
    icon: FaMapMarkerAlt
  },
  {
    title: "Business Hours",
    titleKey: "contact.hours",
    value: "Monday - Friday: 9:00 AM - 5:00 PM",
    thaiValue: "Lorem ipsum: 9:00 - 17:00",
    icon: FaClock
  }
];

export interface FormField {
  id: string;
  label: string;
  labelKey: string;
  type: string;
  placeholder: string;
  thaiPlaceholder: string;
  required: boolean;
}

export const CONTACT_FORM_FIELDS: FormField[] = [
  {
    id: "firstName",
    label: "First Name",
    labelKey: "form.firstName",
    type: "text",
    placeholder: "Your first name",
    thaiPlaceholder: "Lorem ipsum",
    required: true
  },
  {
    id: "lastName",
    label: "Last Name",
    labelKey: "form.lastName",
    type: "text",
    placeholder: "Your last name",
    thaiPlaceholder: "Lorem ipsum",
    required: true
  },
  {
    id: "email",
    label: "Email",
    labelKey: "form.email",
    type: "email",
    placeholder: "Your email address",
    thaiPlaceholder: "Lorem ipsum",
    required: true
  },
  {
    id: "phone",
    label: "Phone",
    labelKey: "form.phone",
    type: "tel",
    placeholder: "Your phone number (optional)",
    thaiPlaceholder: "Lorem ipsum (Lorem ipsum)",
    required: false
  },
  {
    id: "message",
    label: "Message",
    labelKey: "form.message",
    type: "textarea",
    placeholder: "Your message or question",
    thaiPlaceholder: "Lorem ipsum dolor sit amet",
    required: true
  }
];