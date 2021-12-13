import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

import CartComponent from "../Cart";
import CartWidgetComponet from "../CartWidget";

const CartHover = () => {
    const popOver = (
        <Popover className="popover">
          <Popover.Content>
            <CartComponent header={true}/>
          </Popover.Content>
        </Popover>
      );
    return(
        <>
        <OverlayTrigger
        trigger={["click", "hover"]}
        rootClose={true}
        placement={"bottom"}
        overlay={popOver}>
          <div className={"d-inline-block"}>
              <CartWidgetComponet />
          </div>
        </OverlayTrigger>
        </>
    );
};

export default CartHover;