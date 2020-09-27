import axios from 'axios';
import React from 'react';

type ResultState = {
    result: any,
    year: string,
    successFilter:boolean,
    landingFilter:boolean,
    loading: boolean
}

class ListingComponent extends React.Component<{}, ResultState> {
    constructor(props: any) {
        super(props);
        this.state = {
            result: [],
            year: '',
            successFilter:true,
            landingFilter: true,
            loading: false
        };
        this.filterData = this.filterData.bind(this);
    }
    componentDidMount() {
        this.setState({ loading: true }, () => {
            axios.get('https://api.spacexdata.com/v3/launches?limit=100')
                .then(response => this.setState({
                    loading: false,
                    result: [...response.data],
                }));
        });
    }
    renderContent = () => {
        const ResultData: any = this.state.result;
        if (ResultData.length === 0 ) {
            return (
                <React.Fragment>
                    <div className="row">
                        <div>
                            <h2>There is No Data found with applied filters.</h2>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
        const launchData = ResultData.map((items: any) => {
            const data = 
                    <ul>
                        {
                            items.mission_id.map((MissionIds:any) => {
                                return <li>{MissionIds ? MissionIds: 'N/A'}</li>
                            })
                        }
                    </ul>
            return (
                <React.Fragment>
                    <div className="col-md-3 col-sm-6 child-section">
                        <div className="inner-section">
                            <img className="mission-image" src={items.links.mission_patch_small} alt={items.mission_name} />
                            <a className="title-name" target="_blank" href={items.links.article_link}>{items.mission_name + '  #' + items.flight_number} </a>
                            <span className="missionIds"><strong>Mission Ids:</strong>{data}</span>
                            <span><strong>Launch Year:</strong>{items.launch_year}</span>
                            <span><strong>Successful Launch:</strong>{items.launch_success?'true':'false'}</span>
                        </div>
                    </div>
                </React.Fragment>
            )
        })
        return launchData;
    }
    filterData = (filtertype:string) => {
        let FilterUrl = 'https://api.spacexdata.com/v3/launches?limit=100'; 
        if (filtertype ==='successtrue') {
            this.setState({ successFilter: true });
            FilterUrl = FilterUrl + `&launch_sucess=${this.state.successFilter}&land_success=${this.state.landingFilter}&launch_year=${this.state.year}`;
        }
        else if (filtertype === 'successfalse') {
            this.setState({ successFilter: false });
            FilterUrl = FilterUrl + `&launch_sucess=${this.state.successFilter}&land_success=${this.state.landingFilter}&launch_year=${this.state.year}`;
        }
        else if (filtertype === 'landingtrue'){
            this.setState({ landingFilter: true });
            FilterUrl = FilterUrl + `&launch_sucess=${this.state.successFilter}&land_success=${this.state.landingFilter}&launch_year=${this.state.year}`;
        }
        else if (filtertype === 'landingfalse'){
            this.setState({ landingFilter: false });
            FilterUrl = FilterUrl + `&launch_sucess=${this.state.successFilter}&land_success=${this.state.landingFilter}&launch_year=${this.state.year}`;
        }
        else if(filtertype === 'reset') {
            this.setState({ year: '', landingFilter: true, successFilter:true});
            FilterUrl = FilterUrl;
        }
        else {
            this.setState({ year: filtertype });
            FilterUrl = FilterUrl + `&launch_sucess=${this.state.successFilter}&land_success=${this.state.landingFilter}&launch_year=${filtertype}`;
        }
        this.setState({ loading: true }, () => {
            axios.get(FilterUrl)
                .then(response => this.setState({
                    loading: false,
                    result: [...response.data],
                }));
        });
    }
    render() {
        return (
            <div className="demo">

                <div className='view-container'>
                    <div className='container side-bar-section'>
                        <h4>Spacex Launch Programs</h4>
                        <div className='col-md-2 col-sm-12 col-xs-12 filters-section'>
                            <div>
                                <p className="sidebar-filters"><strong>Filters</strong><p data-testid="reset" onClick={() => this.filterData('reset')}>Reset</p></p>
                                <p className="launch-year">Launch Year</p>
                                <ul className="launch-buttons">
                                    <li className={this.state.year === '2006' ? 'active' : ''} data-testid="launch-year-2006" onClick={() => this.filterData('2006')}>2006</li>
                                    <li className={this.state.year === '2007' ? 'active' : ''} data-testid="launch-year-2007" onClick={() => this.filterData('2007')}>2007</li>
                                    <li className={this.state.year === '2008' ? 'active' : ''} data-testid="launch-year-2008" onClick={() => this.filterData('2008')}>2008</li>
                                    <li className={this.state.year === '2009' ? 'active' : ''} data-testid="launch-year-2009" onClick={() => this.filterData('2009')}>2009</li>
                                    <li className={this.state.year === '2010' ? 'active' : ''} data-testid="launch-year-2010" onClick={() => this.filterData('2010')}>2010</li>
                                    <li className={this.state.year === '2011' ? 'active' : ''} data-testid="launch-year-2011" onClick={() => this.filterData('2011')}>2011</li>
                                    <li className={this.state.year === '2012' ? 'active' : ''} data-testid="launch-year-2012" onClick={() => this.filterData('2012')}>2012</li>
                                    <li className={this.state.year === '2013' ? 'active' : ''} data-testid="launch-year-2013" onClick={() => this.filterData('2013')}>2013</li>
                                    <li className={this.state.year === '2014' ? 'active' : ''} data-testid="launch-year-2014" onClick={() => this.filterData('2014')}>2014</li>
                                    <li className={this.state.year === '2015' ? 'active' : ''} data-testid="launch-year-2015" onClick={() => this.filterData('2015')}>2015</li>
                                    <li className={this.state.year === '2016' ? 'active' : ''} data-testid="launch-year-2016" onClick={() => this.filterData('2016')}>2016</li>
                                    <li className={this.state.year === '2017' ? 'active' : ''} data-testid="launch-year-2017" onClick={() => this.filterData('2017')}>2017</li>
                                    <li className={this.state.year === '2018' ? 'active' : ''} data-testid="launch-year-2018" onClick={() => this.filterData('2018')}>2018</li>
                                    <li className={this.state.year === '2019' ? 'active' : ''} data-testid="launch-year-2019" onClick={() => this.filterData('2019')}>2019</li>
                                    <li className={this.state.year === '2020' ? 'active' : ''} data-testid="launch-year-2020" onClick={() => this.filterData('2020')}>2020</li>
                                </ul>
                                <p className="launch-year">Successful Launch</p>
                                <ul className="launch-buttons">
                                    <li className={this.state.successFilter ? 'active' : ''} data-testid="success-true" onClick={() => this.filterData('successtrue')}>True</li>
                                    <li className={this.state.successFilter ? '' : 'active'} data-testid="success-false" onClick={() => this.filterData('successfalse')}>False</li>
                                </ul>
                                <p className="launch-year">Successful Landing</p>
                                <ul className="launch-buttons">
                                    <li className={this.state.landingFilter ? 'active' : ''} data-testid="landing-true" onClick={() => this.filterData('landingtrue')}>True</li>
                                    <li className={this.state.landingFilter ? '' : 'active'} data-testid="landing-false" onClick={() => this.filterData('landingfalse')}>False</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-10 col-sm-12 col-xs-12 paddingRight'>
                            {this.state.loading ? <div className="loader"></div>: this.renderContent() }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ListingComponent;