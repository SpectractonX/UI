import { FunctionComponent } from "react";
import GroupComponent from "../components/GroupComponent";
import styles from "./Flight.module.css";

const Flight: FunctionComponent = () => {
  return (
    <div className={styles.flight}>
      <div className={styles.flightChild} />
      <img className={styles.flightItem} alt="" src="/ellipse-2.svg" />
      <div className={styles.flightInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.groupDiv}>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.flightChild1} />
      <div className={styles.results25}>RESULTS (25)</div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
        <b className={styles.oneWay}>ONE WAY</b>
        <div className={styles.roundTrip}>ROUND TRIP</div>
        <div className={styles.multiCity}>MULTI CITY</div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild1} />
        <div className={styles.search}>SEARCH</div>
      </div>
      <img className={styles.groupIcon} alt="" src="/group-10.svg" />
      <div className={styles.rectangleContainer}>
        <div className={styles.groupChild2} />
        <div className={styles.groupChild3} />
        <div className={styles.nonStop}>NON STOP</div>
        <div className={styles.filter}>FILTER</div>
        <div className={styles.ticketOfClass}>TICKET OF CLASS</div>
        <img className={styles.eparrowDownIcon} alt="" src="/eparrowdown.svg" />
        <div className={styles.frameDiv}>
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
          <div className={styles.frameInner} />
          <div className={styles.fxemojiworldmap}>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
            <img
              className={styles.fxemojiworldmapChild}
              alt=""
              src="/vector-1.svg"
            />
            <img
              className={styles.fxemojiworldmapItem}
              alt=""
              src="/group-7.svg"
            />
            <img
              className={styles.materialSymbolsflightsmodeIcon}
              alt=""
              src="/materialsymbolsflightsmode@2x.png"
            />
            <b className={styles.newYork}>NEW YORK</b>
            <b className={styles.mumbai}>MUMBAI</b>
          </div>
          <div className={styles.nonStop1}>NON-STOP</div>
          <div className={styles.oneStop}>ONE STOP</div>
          <div className={styles.moreStop}>MORE STOP</div>
          <div className={styles.jfk}>JFK</div>
          <div className={styles.from}>FROM</div>
          <div className={styles.price}>PRICE</div>
          <div className={styles.to}>TO</div>
          <div className={styles.bom}>BOM</div>
          <img className={styles.frameChild1} alt="" src="/group-11.svg" />
          <img className={styles.unionIcon} alt="" src="/union@2x.png" />
          <img className={styles.unionIcon} alt="" src="/union@2x.png" />
          <div className={styles.div}>$500</div>
          <div className={styles.div1}>$2500</div>
        </div>
      </div>
      <GroupComponent
        tRAVELLER="2 TRAVELLER"
        iconamoonprofileFill="/iconamoonprofilefill.svg"
      />
      <GroupComponent
        tRAVELLER="29  JULY   2019"
        iconamoonprofileFill="/uilcalender.svg"
        propTop="293px"
        propLeft="1545px"
        propLeft1="105px"
      />
      <GroupComponent
        tRAVELLER="FIRST CLASS"
        iconamoonprofileFill="/solararmchairbold.svg"
        propTop="441px"
        propLeft="1545px"
        propLeft1="102px"
      />
      <div className={styles.rectangleParent1}>
        <div className={styles.groupItem} />
        <div className={styles.newYorkJfk}>NEW YORK (JFK)</div>
        <div className={styles.mumbaiBom}>MUMBAI (BOM)</div>
        <img
          className={styles.ionlocationSharpIcon}
          alt=""
          src="/ionlocationsharp.svg"
        />
        <img
          className={styles.ionlocationSharpIcon1}
          alt=""
          src="/ionlocationsharp.svg"
        />
        <div className={styles.ellipseDiv} />
        <img
          className={styles.mingcutetransfer3LineIcon}
          alt=""
          src="/mingcutetransfer3line.svg"
        />
      </div>
      <div className={styles.groupParent}>
        <div className={styles.rectangleParent2}>
          <div className={styles.groupChild5} />
          <div className={styles.parent}>
            <div className={styles.div2}>
              ---------------------------------------------------------------------------------------------------
            </div>
            <div className={styles.groupChild6} />
            <div className={styles.groupChild7} />
          </div>
          <div className={styles.group}>
            <div className={styles.div2}>
              ---------------------------------------------------------------------------------------------------
            </div>
            <div className={styles.groupChild6} />
            <div className={styles.groupChild7} />
          </div>
          <div className={styles.container}>
            <div className={styles.div2}>
              ---------------------------------------------------------------------------------------------------
            </div>
            <div className={styles.groupChild6} />
            <div className={styles.groupChild7} />
          </div>
        </div>
        <div className={styles.bomParent}>
          <div className={styles.bom1}>BOM</div>
          <div className={styles.div5}>$1,872</div>
          <img
            className={styles.simpleIconsemirates}
            alt=""
            src="/simpleiconsemirates.svg"
          />
          <div className={styles.emirates}>Emirates</div>
          <div className={styles.jfk1}>JFK</div>
          <div className={styles.div6}>13:00</div>
          <div className={styles.div7}>14:20</div>
          <div className={styles.emirates1}>EMIRATES</div>
          <div className={styles.h20m}>11H 20M</div>
          <div className={styles.nonStop2}>NON-STOP</div>
          <div className={styles.rectangleParent3}>
            <div className={styles.groupChild12} />
            <div className={styles.bookNow}>BOOK NOW</div>
          </div>
        </div>
        <div className={styles.bomGroup}>
          <div className={styles.bom1}>BOM</div>
          <div className={styles.div5}>$1,872</div>
          <img
            className={styles.simpleIconsemirates1}
            alt=""
            src="/simpleiconsemirates.svg"
          />
          <div className={styles.emirates}>Emirates</div>
          <div className={styles.jfk1}>JFK</div>
          <div className={styles.div6}>13:00</div>
          <div className={styles.div7}>14:20</div>
          <div className={styles.emirates1}>EMIRATES</div>
          <div className={styles.h20m}>11H 20M</div>
          <div className={styles.nonStop2}>NON-STOP</div>
          <div className={styles.rectangleParent3}>
            <div className={styles.groupChild12} />
            <div className={styles.bookNow}>BOOK NOW</div>
          </div>
        </div>
        <div className={styles.groupContainer}>
          <div className={styles.bomContainer}>
            <div className={styles.bom3}>BOM</div>
            <div className={styles.div11}>$1,872</div>
            <div className={styles.qatar}>QATAR</div>
            <div className={styles.airways}>AIRWAYS</div>
            <div className={styles.jfk3}>JFK</div>
            <div className={styles.div12}>13:00</div>
            <div className={styles.div13}>14:20</div>
            <div className={styles.emirates4}>EMIRATES</div>
            <div className={styles.h20m2}>11H 20M</div>
            <div className={styles.nonStop4}>NON-STOP</div>
            <div className={styles.rectangleParent5}>
              <div className={styles.groupChild12} />
              <div className={styles.bookNow}>BOOK NOW</div>
            </div>
          </div>
          <img
            className={styles.simpleIconsqatarairways}
            alt=""
            src="/simpleiconsqatarairways.svg"
          />
        </div>
        <div className={styles.groupParent1}>
          <div className={styles.bomParent1}>
            <div className={styles.bom4}>BOM</div>
            <div className={styles.div14}>$1,872</div>
            <div className={styles.lufthansa}>Lufthansa</div>
            <div className={styles.jfk4}>JFK</div>
            <div className={styles.div15}>13:00</div>
            <div className={styles.div16}>14:20</div>
            <div className={styles.emirates5}>EMIRATES</div>
            <div className={styles.h20m3}>11H 20M</div>
            <div className={styles.nonStop5}>NON-STOP</div>
            <div className={styles.rectangleParent6}>
              <div className={styles.groupChild12} />
              <div className={styles.bookNow}>BOOK NOW</div>
            </div>
          </div>
          <img
            className={styles.simpleIconslufthansa}
            alt=""
            src="/simpleiconslufthansa.svg"
          />
        </div>
      </div>
      <div className={styles.flightInner1}>
        <div className={styles.rectangleParent7}>
          <div className={styles.frameChild2} />
          <div className={styles.frameChild3} />
          <img className={styles.rectangleIcon} alt="" src="/rectangle-7.svg" />
          <img
            className={styles.materialSymbolsLightdashboaIcon}
            alt=""
            src="/materialsymbolslightdashboardoutlinerounded.svg"
          />
          <img
            className={styles.evasettings2OutlineIcon}
            alt=""
            src="/evasettings2outline.svg"
          />
          <div className={styles.activeUsers}>ACTIVE USERS</div>
          <div className={styles.settings}>SETTINGS</div>
          <div className={styles.statistics}>STATISTICS</div>
          <div className={styles.reports}>REPORTS</div>
          <div className={styles.wallet}>WALLET</div>
          <div className={styles.dashboard}>DASHBOARD</div>
          <b className={styles.ericBenson}>ERIC BENSON</b>
          <div className={styles.flights}>FLIGHTS</div>
          <img className={styles.etwalletIcon} alt="" src="/etwallet.svg" />
          <img
            className={styles.ouiappReportingIcon}
            alt=""
            src="/ouiappreporting.svg"
          />
          <img
            className={styles.wpfstatisticsIcon}
            alt=""
            src="/wpfstatistics.svg"
          />
          <img
            className={styles.materialSymbolsflightsmodeIcon1}
            alt=""
            src="/materialsymbolsflightsmode.svg"
          />
          <img className={styles.ellipseIcon} alt="" src="/ellipse-8@2x.png" />
          <img className={styles.frameChild4} alt="" src="/ellipse-9@2x.png" />
          <img className={styles.frameChild5} alt="" src="/ellipse-10@2x.png" />
          <img className={styles.frameChild6} alt="" src="/ellipse-11@2x.png" />
          <img className={styles.frameChild7} alt="" src="/ellipse-12@2x.png" />
          <img className={styles.frameChild8} alt="" src="/ellipse-13@2x.png" />
          <div className={styles.frameChild9} />
          <div className={styles.ericbensongmailcom}>ericbenson@gmail.com</div>
          <b className={styles.b}>+70</b>
        </div>
      </div>
    </div>
  );
};

export default Flight;
