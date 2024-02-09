import ergast_py
from P10 import * 


def get_results(round, season):
    e = ergast_py.Ergast()
    race = e.season(season).round(round).get_result()
    results = [] 
    for driver_result in race.results:
        r = Raceresult(driver_result.position, driver_result.position_text, driver_result.laps, driver_result.driver.driver_id)
        results.append(r)
    return results

def get_schedule(racename, racenumber):
    #todo get real race schedule from somewhere
    return

def get_latest_drivers():
    e = ergast_py.Ergast()
    race = e.season().round()
    return [d.driver_id for d in race.get_drivers()]

