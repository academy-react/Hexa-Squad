import React from "react";
import {
  phoneSvg,
  facebookSvg,
  twitterSvg,
  instagramSvg,
  whatsAppSvg,
  telegramSvg,
  mailSvg,
} from "../../../assets/icons/svgIcons";
// import { Link } from "react-router-dom";

const TeacherSocialMedia = ({
  number,
  email,
  facebook,
  twitter,
  instagram,
  linkdin,
  telegram,
  whatsApp,
}) => {
  return (
    <div className="my-4 pr-4 md:pb-4">
      {/* <div className="flex flex-row gap-8"> */}
      {number != undefined ? (
        <div className="my-6 lg:my-8 flex flex-row">
          <i className="bi bi-telephone text-[#03001C] dark:text-whitePink opacity-60"></i>
          <p className="contact-teacher">{number}</p>
        </div>
      ) : (
        ""
      )}
      {email != undefined ? (
        <div className="my-6 lg:my-8 flex flex-row">
          <i className="bi bi-envelope-at text-[#03001C] dark:text-whitePink opacity-60"></i>
          <p className="contact-teacher">{email}</p>
        </div>
      ) : (
        ""
      )}
      {/* </div> */}
      <div className="md:mt-4 flex flex-row lg:gap-x-3 -mr-2">
        {facebook != undefined ? (
          <a
            href={"" + facebook}
            className="media-icons-border teacher-media-icons"
          >
            {facebookSvg}
          </a>
        ) : (
          ""
        )}
        {twitter != undefined ? (
          <a
            href={"" + twitter}
            className="media-icons-border teacher-media-icons"
          >
            {twitterSvg}
          </a>
        ) : (
          ""
        )}
        {instagram != undefined ? (
          <a
            href={"" + instagram}
            className="media-icons-border teacher-media-icons"
          >
            {instagramSvg}
          </a>
        ) : (
          ""
        )}
        {whatsApp != undefined ? (
          <a
            href={"" + whatsApp}
            className="media-icons-border teacher-media-icons"
          >
            {whatsAppSvg}
          </a>
        ) : (
          ""
        )}
        {linkdin != undefined ? (
          <a
            href={"" + linkdin}
            className="media-icons-border flex justify-center items-center teacher-media-icons"
          >
            <i className="bi bi-linkedin media-icons pt-1 pr-1  text-[#8E8EAA] dark:text-whitePink opacity-60"></i>
          </a>
        ) : (
          ""
        )}
        {whatsApp != undefined ? (
          <a
            href={"" + whatsApp}
            className="media-icons-border teacher-media-icons"
          >
            {whatsAppSvg}
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default TeacherSocialMedia;
