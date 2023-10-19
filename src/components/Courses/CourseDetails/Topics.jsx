import { React, useState } from "react";
import TopicsItems from "./TopicsItems";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import TopicButtons from "./TopicButtons";

// Demo styles, see 'Styles' section below for some notes on use.

export default function Topics() {
  const [items, setItems] = useState([
    {
      heading: "فصل اول",
      content: "iecjponcnokjncmjknjjkncdjo;nfojvkcnm;olk;",
    },
    {
      heading: "فصل دوم",
      content: "iecjponcnokjncmjknjjkncdjo;nfojvkcnm;olk;",
    },
    {
      heading: "فصل سوم",
      content: "iecjponcnokjncmjknjjkncdjo;nfojvkcnm;olk;",
    },
  ]);
  return (
   

    <Accordion allowMultipleExpanded>
      {items.map((item) => (
        <AccordionItem key={item.uuid}>
          <AccordionItemHeading>
            <AccordionItemButton>
              <TopicButtons
              heading={item.heading}
              />
              
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <TopicsItems />
           
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
