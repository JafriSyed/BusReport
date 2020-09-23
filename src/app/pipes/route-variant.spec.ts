import { RouteVariantPipe } from "./route-variant";

describe('RouteVariantPipe', () => {
  // This pipe is a pure, stateless function so no need for BeforeEach
  const pipe = new RouteVariantPipe();

  it('transforms Unknown to "Unknown"', () => {
    expect(pipe.transform("UNKNOWN")).toBe('UNKNOWN');
  });

  it('transforms first 3 digits to bold', () => {
    expect(pipe.transform("181 1 2")).toBe('<strong>181</strong> 1 2');
  });
});
