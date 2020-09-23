import { ColorStatusPipe } from "./color.status";

describe('ColorStatusPipe', () => {
  // This pipe is a pure, stateless function so no need for BeforeEach
  const pipe = new ColorStatusPipe();

  it('transforms null deviationFromTimetable value to "Unknown"', () => {
    expect(pipe.transform(null)).toBe('<span class="label other">Unknown</span>');
  });

  it('transforms "< 0 deviationFromTimetable" to "Late"', () => {
    expect(pipe.transform(-1)).toBe('<span class="label info">Late</span>');
  });

  it('transforms ">= 300 deviationFromTimetable" to "Early"', () => {
    expect(pipe.transform(300)).toBe('<span class="label danger">Early</span>');
  });

  it('transforms "any deviationFromTimetable value between 0 and 300 to "On Time"', () => {
    expect(pipe.transform(100)).toBe('<span class="label success">On Time</span>');
  });
  // ... more tests ...
});
