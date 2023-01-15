export default class Time {
  static getTimeFromSeconds(duration: number) {
    const hrs = ~~(duration / 3600);
    const mins = ~~(duration / 60);
    const secs = duration - mins * 60;
    const extSecs = ('0' + secs).slice(-2);

    return {
      hrs: String(hrs),
      mins: String(mins),
      secs: extSecs,
    };
  }
}
