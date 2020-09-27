import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ListingComponent from './listing';
import { Provider } from 'react-redux';
import { render,fireEvent } from '@testing-library/react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
Enzyme.configure({ adapter: new Adapter() });
describe("AircraftConnectionThreatDetection Unit Test", () => {

    let initialState
    let store: any;
    let mockStore: any;
    let data: any;
    beforeAll(() => {
        const middlewares = [thunk]
        mockStore = configureStore(middlewares);
        initialState = {
                result: [
                {
                    "flight_number": 1,
                    "mission_name": "FalconSat",
                    "mission_id": [],
                    "upcoming": false,
                    "launch_year": "2006",
                    "launch_date_unix": 1143239400,
                    "launch_date_utc": "2006-03-24T22:30:00.000Z",
                    "launch_date_local": "2006-03-25T10:30:00+12:00",
                    "is_tentative": false,
                    "tentative_max_precision": "hour",
                    "tbd": false,
                    "launch_window": 0,
                    "rocket": {
                        "rocket_id": "falcon1",
                        "rocket_name": "Falcon 1",
                        "rocket_type": "Merlin A",
                        "first_stage": {
                            "cores": [
                                {
                                    "core_serial": "Merlin1A",
                                    "flight": 1,
                                    "block": null,
                                    "gridfins": false,
                                    "legs": false,
                                    "reused": false,
                                    "land_success": null,
                                    "landing_intent": false,
                                    "landing_type": null,
                                    "landing_vehicle": null
                                }
                            ]
                        },
                        "second_stage": {
                            "block": 1,
                            "payloads": [
                                {
                                    "payload_id": "FalconSAT-2",
                                    "norad_id": [],
                                    "reused": false,
                                    "customers": [
                                        "DARPA"
                                    ],
                                    "nationality": "United States",
                                    "manufacturer": "SSTL",
                                    "payload_type": "Satellite",
                                    "payload_mass_kg": 20,
                                    "payload_mass_lbs": 43,
                                    "orbit": "LEO",
                                    "orbit_params": {
                                        "reference_system": "geocentric",
                                        "regime": "low-earth",
                                        "longitude": null,
                                        "semi_major_axis_km": null,
                                        "eccentricity": null,
                                        "periapsis_km": 400,
                                        "apoapsis_km": 500,
                                        "inclination_deg": 39,
                                        "period_min": null,
                                        "lifespan_years": null,
                                        "epoch": null,
                                        "mean_motion": null,
                                        "raan": null,
                                        "arg_of_pericenter": null,
                                        "mean_anomaly": null
                                    }
                                }
                            ]
                        },
                        "fairings": {
                            "reused": false,
                            "recovery_attempt": false,
                            "recovered": false,
                            "ship": null
                        }
                    },
                    "ships": [],
                    "telemetry": {
                        "flight_club": null
                    },
                    "launch_site": {
                        "site_id": "kwajalein_atoll",
                        "site_name": "Kwajalein Atoll",
                        "site_name_long": "Kwajalein Atoll Omelek Island"
                    },
                    "launch_success": false,
                    "launch_failure_details": {
                        "time": 33,
                        "altitude": null,
                        "reason": "merlin engine failure"
                    },
                    "links": {
                        "mission_patch": "https://images2.imgbox.com/40/e3/GypSkayF_o.png",
                        "mission_patch_small": "https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png",
                        "reddit_campaign": null,
                        "reddit_launch": null,
                        "reddit_recovery": null,
                        "reddit_media": null,
                        "presskit": null,
                        "article_link": "https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html",
                        "wikipedia": "https://en.wikipedia.org/wiki/DemoSat",
                        "video_link": "https://www.youtube.com/watch?v=0a_00nJ_Y88",
                        "youtube_id": "0a_00nJ_Y88",
                        "flickr_images": []
                    },
                    "details": "Engine failure at 33 seconds and loss of vehicle",
                    "static_fire_date_utc": "2006-03-17T00:00:00.000Z",
                    "static_fire_date_unix": 1142553600,
                    "timeline": {
                        "webcast_liftoff": 54
                    },
                    "crew": null
                }, {
                    "flight_number": 2,
                    "mission_name": "DemoSat",
                    "mission_id": [],
                    "launch_year": "2007",
                    "launch_date_unix": 1174439400,
                    "launch_date_utc": "2007-03-21T01:10:00.000Z",
                    "launch_date_local": "2007-03-21T13:10:00+12:00",
                    "is_tentative": false,
                    "tentative_max_precision": "hour",
                    "tbd": false,
                    "launch_window": 0,
                    "rocket": {
                        "rocket_id": "falcon1",
                        "rocket_name": "Falcon 1",
                        "rocket_type": "Merlin A",
                        "first_stage": {
                            "cores": [
                                {
                                    "core_serial": "Merlin2A",
                                    "flight": 1,
                                    "block": null,
                                    "gridfins": false,
                                    "legs": false,
                                    "reused": false,
                                    "land_success": null,
                                    "landing_intent": false,
                                    "landing_type": null,
                                    "landing_vehicle": null
                                }
                            ]
                        },
                        "second_stage": {
                            "block": 1,
                            "payloads": [
                                {
                                    "payload_id": "DemoSAT",
                                    "norad_id": [],
                                    "reused": false,
                                    "customers": [
                                        "DARPA"
                                    ],
                                    "nationality": "United States",
                                    "manufacturer": "SpaceX",
                                    "payload_type": "Satellite",
                                    "payload_mass_kg": null,
                                    "payload_mass_lbs": null,
                                    "orbit": "LEO",
                                    "orbit_params": {
                                        "reference_system": "geocentric",
                                        "regime": "low-earth",
                                        "longitude": null,
                                        "semi_major_axis_km": null,
                                        "eccentricity": null,
                                        "periapsis_km": null,
                                        "apoapsis_km": null,
                                        "inclination_deg": null,
                                        "period_min": null,
                                        "lifespan_years": null,
                                        "epoch": null,
                                        "mean_motion": null,
                                        "raan": null,
                                        "arg_of_pericenter": null,
                                        "mean_anomaly": null
                                    }
                                }
                            ]
                        },
                        "fairings": {
                            "reused": false,
                            "recovery_attempt": false,
                            "recovered": false,
                            "ship": null
                        }
                    },
                    "ships": [],
                    "telemetry": {
                        "flight_club": null
                    },
                    "launch_site": {
                        "site_id": "kwajalein_atoll",
                        "site_name": "Kwajalein Atoll",
                        "site_name_long": "Kwajalein Atoll Omelek Island"
                    },
                    "launch_success": false,
                    "launch_failure_details": {
                        "time": 301,
                        "altitude": 289,
                        "reason": "harmonic oscillation leading to premature engine shutdown"
                    },
                    "links": {
                        "mission_patch": "https://images2.imgbox.com/be/e7/iNqsqVYM_o.png",
                        "mission_patch_small": "https://images2.imgbox.com/4f/e3/I0lkuJ2e_o.png",
                        "reddit_campaign": null,
                        "reddit_launch": null,
                        "reddit_recovery": null,
                        "reddit_media": null,
                        "presskit": null,
                        "article_link": "https://www.space.com/3590-spacex-falcon-1-rocket-fails-reach-orbit.html",
                        "wikipedia": "https://en.wikipedia.org/wiki/DemoSat",
                        "video_link": "https://www.youtube.com/watch?v=Lk4zQ2wP-Nc",
                        "youtube_id": "Lk4zQ2wP-Nc",
                        "flickr_images": []
                    },
                    "details": "Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage",
                    "upcoming": false,
                    "static_fire_date_utc": null,
                    "static_fire_date_unix": null,
                    "timeline": {
                        "webcast_liftoff": 60
                    },
                    "crew": null
                }
                ],
                year: '2020',
                successFilter: true,
                landingFilter: true,
                loading: false
        };
        store = mockStore(initialState);
        data = { ...initialState };


    });
    it("should render Listing Component", () => {
        const component = mount(
            <Provider store={store} >
                <ListingComponent />
            </Provider>);
        expect(component).toMatchSnapshot();
    });
    it("should render Listing Component with filters", () => {
        const store = mockStore(data);
        const component = mount(
            <Provider store={store}><ListingComponent />
            </Provider>
        );
        const { container, getByTestId } = render(
            <Provider store={store}><ListingComponent />
            </Provider>
        );
        const launch_year_2006: any = getByTestId('launch-year-2006');
        fireEvent.click(launch_year_2006);
        const launch_year_2007: any = getByTestId('launch-year-2007');
        fireEvent.click(launch_year_2007);
        const launch_year_2008: any = getByTestId('launch-year-2008');
        fireEvent.click(launch_year_2008);
        const launch_year_2009: any = getByTestId('launch-year-2009');
        fireEvent.click(launch_year_2009);
        const launch_year_2010: any = getByTestId('launch-year-2010');
        fireEvent.click(launch_year_2010);
        const launch_year_2011: any = getByTestId('launch-year-2011');
        fireEvent.click(launch_year_2011);
        const launch_year_2012: any = getByTestId('launch-year-2012');
        fireEvent.click(launch_year_2012);
        const launch_year_2013: any = getByTestId('launch-year-2013');
        fireEvent.click(launch_year_2013);
        const launch_year_2014: any = getByTestId('launch-year-2014');
        fireEvent.click(launch_year_2014);
        const launch_year_2015: any = getByTestId('launch-year-2015');
        fireEvent.click(launch_year_2015);
        const launch_year_2016: any = getByTestId('launch-year-2016');
        fireEvent.click(launch_year_2016);
        const launch_year_2017: any = getByTestId('launch-year-2017');
        fireEvent.click(launch_year_2017);
        const launch_year_2018: any = getByTestId('launch-year-2018');
        fireEvent.click(launch_year_2018);
        const launch_year_2019: any = getByTestId('launch-year-2019');
        fireEvent.click(launch_year_2019);
        const launch_year_2020: any = getByTestId('launch-year-2020');
        fireEvent.click(launch_year_2020);
        const successtrue: any = getByTestId('success-true');
        fireEvent.click(successtrue);
        const successfalse: any = getByTestId('success-false');
        fireEvent.click(successfalse);
        const landingfalse: any = getByTestId('landing-false');
        fireEvent.click(landingfalse);
        const landingtrue: any = getByTestId('landing-true');
        fireEvent.click(landingtrue);
        const reset: any = getByTestId('reset');
        fireEvent.click(reset);
        expect(component).toMatchSnapshot();
    });

});