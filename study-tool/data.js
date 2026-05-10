/* ===== NC STATE PLACEMENT PREP — DATA ===== */

const SUBJECTS = {
  calc: {
    name: 'Math Placement',
    description: 'Algebra through Calculus',
    icon: '📐',
    topics: [
      {
        id: 'algebra',
        name: 'Algebra & Pre-Calculus',
        icon: '🔢',
        qs: [
          {
            q: 'Simplify: <span class="math">(x² − 4) / (x − 2)</span>',
            opts: ['x + 2', 'x − 2', 'x² − 2', '(x+2)(x−2)'],
            a: 0,
            exp: 'Factor the numerator as a difference of squares: x² − 4 = (x+2)(x−2). Cancel (x−2) from numerator and denominator to get <strong>x + 2</strong>. (Valid when x ≠ 2.)'
          },
          {
            q: 'Factor completely: <span class="math">2x³ − 8x</span>',
            opts: ['2x(x² − 4)', '2x(x+2)(x−2)', '2x(x−2)²', 'x(2x−4)²'],
            a: 1,
            exp: 'First factor out 2x: 2x(x² − 4). Then recognize x² − 4 as a difference of squares: (x+2)(x−2). Final answer: <strong>2x(x+2)(x−2)</strong>.'
          },
          {
            q: 'Solve for x: <span class="math">3x² − 7x + 2 = 0</span>',
            opts: ['x = 2 or x = 1/3', 'x = −2 or x = −1/3', 'x = 7 or x = 3', 'x = 1/2 or x = 2/3'],
            a: 0,
            exp: 'Factor: 3x² − 7x + 2 = (3x − 1)(x − 2). Setting each factor to zero gives <strong>x = 1/3</strong> and <strong>x = 2</strong>.'
          },
          {
            q: 'Evaluate: <span class="math">log₂(8) + log₂(4)</span>',
            opts: ['log₂(12)', 'log₂(2)', '5', '6'],
            a: 2,
            exp: 'Use the product rule: log₂(8) + log₂(4) = log₂(8·4) = log₂(32). Since 2⁵ = 32, this equals <strong>5</strong>.'
          },
          {
            q: 'Simplify: <span class="math">√50 − 2√8</span>',
            opts: ['√42', '3√2', '√2', '5√2 − 4'],
            a: 2,
            exp: '√50 = 5√2 and 2√8 = 2·2√2 = 4√2. So 5√2 − 4√2 = <strong>√2</strong>.'
          },
          {
            q: 'Evaluate: <span class="math">27<sup>2/3</sup></span>',
            opts: ['3', '6', '9', '18'],
            a: 2,
            exp: '27<sup>2/3</sup> = (27<sup>1/3</sup>)² = 3² = <strong>9</strong>. The cube root of 27 is 3.'
          },
          {
            q: 'Solve: <span class="math">|2x − 3| = 7</span>',
            opts: ['x = 5 only', 'x = −2 only', 'x = 5 or x = −2', 'x = 2 or x = −5'],
            a: 2,
            exp: '|2x−3| = 7 gives two equations: 2x−3 = 7 → x = 5, and 2x−3 = −7 → x = −2. Both solutions: <strong>x = 5 or x = −2</strong>.'
          },
          {
            q: 'Simplify: <span class="math">e<sup>ln(x²)</sup></span>',
            opts: ['2ln(x)', 'x²', '2x', 'x<sup>e</sup>'],
            a: 1,
            exp: 'e and ln are inverse functions: e<sup>ln(u)</sup> = u for any positive u. So e<sup>ln(x²)</sup> = <strong>x²</strong>.'
          },
          {
            q: 'Solve: <span class="math">2<sup>x</sup> = 32</span>',
            opts: ['x = 4', 'x = 16', 'x = 6', 'x = 5'],
            a: 3,
            exp: 'Write 32 as a power of 2: 32 = 2⁵. So 2<sup>x</sup> = 2⁵ gives <strong>x = 5</strong>.'
          },
          {
            q: 'What is the domain of <span class="math">f(x) = (x + 2) / (x² − 4)</span>?',
            opts: ['All real numbers', 'All x ≠ ±2', 'x > −2 only', 'All x ≠ 2'],
            a: 1,
            exp: 'The denominator x²−4 = (x+2)(x−2) = 0 when x = 2 or x = −2. Both values must be excluded. Domain: <strong>all x ≠ ±2</strong>.'
          }
        ]
      },
      {
        id: 'functions',
        name: 'Functions',
        icon: '📈',
        qs: [
          {
            q: 'What is the domain of <span class="math">f(x) = √(9 − x²)</span>?',
            opts: ['x ≥ 3', '−3 ≤ x ≤ 3', 'x ≤ 9', 'All real numbers'],
            a: 1,
            exp: 'For the square root to be defined, 9 − x² ≥ 0, so x² ≤ 9, which means <strong>−3 ≤ x ≤ 3</strong>.'
          },
          {
            q: 'If <span class="math">f(x) = 2x + 1</span> and <span class="math">g(x) = x² − 3</span>, what is <span class="math">f(g(2))</span>?',
            opts: ['1', '3', '9', '−3'],
            a: 1,
            exp: 'First compute g(2) = 4 − 3 = 1. Then f(g(2)) = f(1) = 2(1)+1 = <strong>3</strong>.'
          },
          {
            q: 'Find the inverse of <span class="math">f(x) = (x + 3) / 2</span>',
            opts: ['f⁻¹(x) = 2x − 3', 'f⁻¹(x) = 2/(x+3)', 'f⁻¹(x) = (x−3)/2', 'f⁻¹(x) = 2x + 3'],
            a: 0,
            exp: 'Swap x and y: x = (y+3)/2. Solve for y: 2x = y+3, so y = <strong>2x − 3</strong>.'
          },
          {
            q: 'Which of these functions is <strong>even</strong>?',
            opts: ['f(x) = x³', 'f(x) = x² + 1', 'f(x) = x² + x', 'f(x) = sin(x)'],
            a: 1,
            exp: 'Even means f(−x) = f(x). Check: f(−x) = (−x)² + 1 = x² + 1 = f(x). ✓ <strong>f(x) = x² + 1</strong> is even.'
          },
          {
            q: 'What is the range of <span class="math">f(x) = 3 − x²</span>?',
            opts: ['All real numbers', 'x ≤ 3', 'y ≤ 3', 'y ≥ 3'],
            a: 2,
            exp: 'Since x² ≥ 0 for all x, we have 3 − x² ≤ 3. The maximum is 3 (at x=0) with no lower bound. Range: <strong>y ≤ 3</strong>.'
          },
          {
            q: 'If <span class="math">f(x) = 2x − 1</span>, what is <span class="math">f(f(3))</span>?',
            opts: ['3', '9', '5', '11'],
            a: 1,
            exp: 'First compute f(3) = 2(3)−1 = 5. Then f(f(3)) = f(5) = 2(5)−1 = <strong>9</strong>.'
          },
          {
            q: 'What is the horizontal asymptote of <span class="math">f(x) = (2x + 1)/(x − 3)</span>?',
            opts: ['y = 0', 'y = 2', 'y = 3', 'No asymptote'],
            a: 1,
            exp: 'For rational functions where the degrees are equal, the horizontal asymptote is the ratio of leading coefficients: 2/1 = <strong>y = 2</strong>.'
          },
          {
            q: 'Is <span class="math">f(x) = x³</span> odd, even, or neither?',
            opts: ['Odd', 'Even', 'Neither', 'Both'],
            a: 0,
            exp: 'Check f(−x) = (−x)³ = −x³ = −f(x). Since f(−x) = −f(x), the function is <strong>odd</strong>.'
          },
          {
            q: 'If <span class="math">f(x) = x² + 1</span> and <span class="math">g(x) = √x</span>, find <span class="math">f(g(4))</span>',
            opts: ['3', '4', '5', '17'],
            a: 2,
            exp: 'g(4) = √4 = 2. Then f(g(4)) = f(2) = 2² + 1 = <strong>5</strong>.'
          },
          {
            q: 'The vertex of <span class="math">f(x) = −(x − 2)² + 3</span> is at:',
            opts: ['(−2, 3)', '(2, 3)', '(2, −3)', '(3, 2)'],
            a: 1,
            exp: 'In vertex form f(x) = a(x − h)² + k, the vertex is (h, k). Here h = 2 and k = 3, so the vertex is <strong>(2, 3)</strong>.'
          }
        ]
      },
      {
        id: 'trig',
        name: 'Trigonometry',
        icon: '〰️',
        qs: [
          {
            q: 'Evaluate: <span class="math">sin(π/6)</span>',
            opts: ['√3/2', '1/2', '√2/2', '1'],
            a: 1,
            exp: 'π/6 = 30°. From the unit circle, sin(30°) = <strong>1/2</strong>.'
          },
          {
            q: 'Evaluate: <span class="math">cos(2π/3)</span>',
            opts: ['1/2', '√3/2', '−1/2', '−√3/2'],
            a: 2,
            exp: '2π/3 = 120° is in the second quadrant. cos(2π/3) = −cos(π/3) = −1/2. Answer: <strong>−1/2</strong>.'
          },
          {
            q: 'Which identity is correct?',
            opts: ['sin(2x) = 2sin(x)cos(x)', 'sin²(x) + cos²(x) = 2', 'tan(x) = cos(x)/sin(x)', 'sin(−x) = sin(x)'],
            a: 0,
            exp: '<strong>sin(2x) = 2sin(x)cos(x)</strong> is the double-angle formula for sine. The Pythagorean identity is sin²+cos²=1, and tan(x) = sin(x)/cos(x).'
          },
          {
            q: 'What is <span class="math">tan(45°)</span>?',
            opts: ['0', '1', '√3', 'Undefined'],
            a: 1,
            exp: 'At 45°, sin(45°) = cos(45°) = √2/2. So tan(45°) = sin/cos = (√2/2)/(√2/2) = <strong>1</strong>.'
          },
          {
            q: 'What is the period of <span class="math">f(x) = sin(3x)</span>?',
            opts: ['π', '2π/3', '3π', '6π'],
            a: 1,
            exp: 'For f(x) = sin(bx), the period is 2π/b. With b = 3, period = <strong>2π/3</strong>.'
          },
          {
            q: 'Solve <span class="math">sin(x) = −1/2</span> for <span class="math">x ∈ [0, 2π)</span>',
            opts: ['x = π/6, 5π/6', 'x = 7π/6, 11π/6', 'x = π/3, 2π/3', 'x = 5π/4, 7π/4'],
            a: 1,
            exp: 'sin is negative in Q3 and Q4. Reference angle for 1/2 is π/6. So x = π + π/6 = 7π/6, and x = 2π − π/6 = 11π/6. Answer: <strong>7π/6, 11π/6</strong>.'
          },
          {
            q: 'What is <span class="math">sin(π/4)</span>?',
            opts: ['1/2', '√3/2', '√2/2', '1'],
            a: 2,
            exp: 'π/4 = 45°. From the unit circle, sin(45°) = <strong>√2/2</strong> ≈ 0.707.'
          },
          {
            q: 'Which is a correct Pythagorean identity?',
            opts: ['1 + tan²(x) = sec²(x)', 'sin²(x) − cos²(x) = 1', 'tan²(x) + 1 = csc²(x)', 'cos²(x) − 1 = sin²(x)'],
            a: 0,
            exp: 'Dividing sin²(x) + cos²(x) = 1 by cos²(x) gives tan²(x) + 1 = sec²(x). So <strong>1 + tan²(x) = sec²(x)</strong> ✓.'
          },
          {
            q: 'What is <span class="math">tan(x)</span> expressed in terms of sin and cos?',
            opts: ['sin(x)/cos(x)', 'cos(x)/sin(x)', 'sin(x)·cos(x)', '1/sin(x)'],
            a: 0,
            exp: 'By definition, <strong>tan(x) = sin(x)/cos(x)</strong>. The reciprocal, cos/sin, would be cot(x).'
          },
          {
            q: 'The amplitude of <span class="math">f(x) = 4sin(2x − π)</span> is:',
            opts: ['2', 'π', '4', '8'],
            a: 2,
            exp: 'For f(x) = A·sin(bx + c), the amplitude is |A|. Here A = 4, so amplitude = <strong>4</strong>.'
          }
        ]
      },
      {
        id: 'limits',
        name: 'Limits & Continuity',
        icon: '∞',
        qs: [
          {
            q: 'Evaluate: <span class="math">lim<sub>x→3</sub> (x² − 9)/(x − 3)</span>',
            opts: ['0', '3', '6', 'Undefined'],
            a: 2,
            exp: 'Factor the numerator: x²−9 = (x+3)(x−3). Cancel (x−3): (x+3). As x→3, this approaches 3+3 = <strong>6</strong>.'
          },
          {
            q: 'Evaluate: <span class="math">lim<sub>x→∞</sub> (3x² + 2x)/(x² − 5)</span>',
            opts: ['0', '2', '3', '∞'],
            a: 2,
            exp: 'Divide numerator and denominator by x²: (3 + 2/x)/(1 − 5/x²). As x→∞, both 2/x and 5/x² → 0, leaving 3/1 = <strong>3</strong>.'
          },
          {
            q: 'Evaluate the fundamental limit: <span class="math">lim<sub>x→0</sub> sin(x)/x</span>',
            opts: ['0', '1', '∞', 'Does not exist'],
            a: 1,
            exp: 'This is a fundamental result in calculus: <strong>lim<sub>x→0</sub> sin(x)/x = 1</strong>. It can be proven with the squeeze theorem.'
          },
          {
            q: 'Is <span class="math">f(x) = {x² + 1, x &lt; 2; &nbsp; 5, x ≥ 2}</span> continuous at x = 2?',
            opts: ['No, f(2) is undefined', 'No, the left and right limits differ', 'Yes, the limit and f(2) all equal 5', 'Yes, only from the right'],
            a: 2,
            exp: 'lim<sub>x→2⁻</sub> = 4+1 = 5 = lim<sub>x→2⁺</sub> = 5 = f(2) = 5. All three agree, so f is <strong>continuous at x = 2</strong>.'
          },
          {
            q: 'Evaluate: <span class="math">lim<sub>x→0⁺</sub> ln(x)</span>',
            opts: ['0', '1', '−∞', '∞'],
            a: 2,
            exp: 'As x approaches 0 from the right, ln(x) decreases without bound. So <strong>lim<sub>x→0⁺</sub> ln(x) = −∞</strong>.'
          },
          {
            q: 'Evaluate: <span class="math">lim<sub>x→2</sub> (x² − 3x + 2)/(x − 2)</span>',
            opts: ['0', '1', '2', 'DNE'],
            a: 1,
            exp: 'Factor numerator: x²−3x+2 = (x−1)(x−2). Cancel (x−2): (x−1). As x→2, this approaches 2−1 = <strong>1</strong>.'
          },
          {
            q: 'Evaluate: <span class="math">lim<sub>x→∞</sub> 5/x</span>',
            opts: ['0', '5', '∞', '1'],
            a: 0,
            exp: 'As x grows without bound, 5/x shrinks toward zero. <strong>lim<sub>x→∞</sub> 5/x = 0</strong>.'
          },
          {
            q: 'Evaluate: <span class="math">lim<sub>x→0</sub> (1 − cos x)/x</span>',
            opts: ['0', '1', '1/2', '∞'],
            a: 0,
            exp: 'Using L\'Hôpital\'s rule or the known limit, lim<sub>x→0</sub>(1−cosx)/x = <strong>0</strong>. (The limit (1−cosx)/x² = 1/2.)'
          },
          {
            q: 'For what value of c is <span class="math">f(x) = {cx + 2, x &lt; 1; &nbsp; 3x − 1, x ≥ 1}</span> continuous at x = 1?',
            opts: ['c = 0', 'c = 2', 'c = 1', 'c = −2'],
            a: 0,
            exp: 'Continuity requires lim<sub>x→1⁻</sub> = lim<sub>x→1⁺</sub>: c(1)+2 = 3(1)−1 → c+2 = 2 → <strong>c = 0</strong>.'
          },
          {
            q: 'Evaluate: <span class="math">lim<sub>x→1</sub> (x³ − 1)/(x − 1)</span>',
            opts: ['1', '2', '3', '0'],
            a: 2,
            exp: 'Factor numerator: x³−1 = (x−1)(x²+x+1). Cancel (x−1): x²+x+1. At x=1: 1+1+1 = <strong>3</strong>.'
          }
        ]
      },
      {
        id: 'derivatives',
        name: 'Derivatives',
        icon: 'd/dx',
        qs: [
          {
            q: 'Find the derivative of <span class="math">f(x) = x³ − 4x² + 7x − 2</span>',
            opts: ['3x² − 4x + 7', '3x² − 8x + 7', 'x² − 8x + 7', '3x² + 7'],
            a: 1,
            exp: 'Apply power rule to each term: d/dx[x³] = 3x², d/dx[−4x²] = −8x, d/dx[7x] = 7, d/dx[−2] = 0. Answer: <strong>3x² − 8x + 7</strong>.'
          },
          {
            q: 'Find d/dx of <span class="math">f(x) = x · sin(x)</span>',
            opts: ['cos(x)', 'sin(x) + x·cos(x)', 'x·cos(x) − sin(x)', 'sin(x)·cos(x)'],
            a: 1,
            exp: 'Product rule: (uv)\' = u\'v + uv\'. With u = x, v = sin(x): u\' = 1, v\' = cos(x). So f\'(x) = sin(x) + x·cos(x). Answer: <strong>sin(x) + x·cos(x)</strong>.'
          },
          {
            q: 'Find d/dx of <span class="math">f(x) = e<sup>x²</sup></span>',
            opts: ['2x·e<sup>x²</sup>', 'e<sup>x²</sup>', 'x²·e<sup>x²−1</sup>', '2e<sup>x²</sup>'],
            a: 0,
            exp: 'Chain rule: d/dx[e<sup>u</sup>] = e<sup>u</sup>·u\'. With u = x², u\' = 2x. So f\'(x) = e<sup>x²</sup>·2x = <strong>2x·e<sup>x²</sup></strong>.'
          },
          {
            q: 'Find the critical points of <span class="math">f(x) = x³ − 3x</span>',
            opts: ['x = 0 only', 'x = 1 and x = −1', 'x = 3 and x = −3', 'x = √3 and x = −√3'],
            a: 1,
            exp: 'f\'(x) = 3x² − 3 = 0 → x² = 1 → x = ±1. Critical points at <strong>x = 1 and x = −1</strong>.'
          },
          {
            q: 'Find d/dx of <span class="math">ln(2x + 1)</span>',
            opts: ['1/(2x+1)', '2/(2x+1)', 'ln(2)', '2·ln(2x+1)'],
            a: 1,
            exp: 'Chain rule: d/dx[ln(u)] = (1/u)·u\'. With u = 2x+1, u\' = 2. So d/dx = <strong>2/(2x+1)</strong>.'
          },
          {
            q: 'Find d/dx of <span class="math">(x² + 1)<sup>5</sup></span>',
            opts: ['5(x²+1)⁴', '10x(x²+1)⁴', '5x(x²+1)⁴', '10(x²+1)⁴'],
            a: 1,
            exp: 'Chain rule: 5(x²+1)⁴ · d/dx[x²+1] = 5(x²+1)⁴ · 2x = <strong>10x(x²+1)⁴</strong>.'
          },
          {
            q: 'What is d/dx of <span class="math">tan(x)</span>?',
            opts: ['sec²(x)', '−csc²(x)', 'sec(x)tan(x)', '1/cos²(x)'],
            a: 0,
            exp: 'd/dx[tan(x)] = <strong>sec²(x)</strong>. This is a standard derivative formula worth memorizing.'
          },
          {
            q: 'Find the second derivative of <span class="math">f(x) = x⁴</span>',
            opts: ['4x³', '4x²', '12x²', '24x'],
            a: 2,
            exp: 'f\'(x) = 4x³. f\'\'(x) = d/dx[4x³] = <strong>12x²</strong>.'
          },
          {
            q: 'What is the slope of the tangent line to <span class="math">f(x) = x²</span> at <span class="math">x = 1</span>?',
            opts: ['1', '2', '3', '4'],
            a: 1,
            exp: 'The slope equals f\'(1). f\'(x) = 2x, so f\'(1) = 2·1 = <strong>2</strong>.'
          },
          {
            q: 'Use implicit differentiation: if <span class="math">x² + y² = 25</span>, find <span class="math">dy/dx</span>',
            opts: ['y/x', '−x/y', 'x/y', '−y/x'],
            a: 1,
            exp: 'Differentiate both sides: 2x + 2y·(dy/dx) = 0. Solve: dy/dx = <strong>−x/y</strong>.'
          }
        ]
      },
      {
        id: 'integration',
        name: 'Integration',
        icon: '∫',
        qs: [
          {
            q: 'Evaluate: <span class="math">∫ (3x² − 2x + 5) dx</span>',
            opts: ['6x − 2 + C', 'x³ − x² + 5x + C', '3x³ − 2x² + 5x + C', 'x³ − x² + C'],
            a: 1,
            exp: 'Integrate each term: ∫3x²dx = x³, ∫−2x dx = −x², ∫5dx = 5x. Result: <strong>x³ − x² + 5x + C</strong>.'
          },
          {
            q: 'Evaluate the definite integral: <span class="math">∫₀¹ 2x dx</span>',
            opts: ['0', '1', '2', '4'],
            a: 1,
            exp: '∫₀¹ 2x dx = [x²]₀¹ = 1² − 0² = <strong>1</strong>.'
          },
          {
            q: 'Evaluate: <span class="math">∫ cos(x) dx</span>',
            opts: ['−sin(x) + C', 'sin(x) + C', '−cos(x) + C', 'tan(x) + C'],
            a: 1,
            exp: 'The antiderivative of cos(x) is <strong>sin(x) + C</strong>. Verify by differentiating: d/dx[sin(x)] = cos(x). ✓'
          },
          {
            q: 'Evaluate: <span class="math">∫₁² (1/x) dx</span>',
            opts: ['0', 'ln(2)', '1', 'e'],
            a: 1,
            exp: '∫(1/x)dx = ln|x| + C. So ∫₁²(1/x)dx = [ln|x|]₁² = ln(2) − ln(1) = ln(2) − 0 = <strong>ln(2)</strong>.'
          },
          {
            q: 'Use substitution to evaluate: <span class="math">∫ x·e<sup>x²</sup> dx</span>',
            opts: ['e<sup>x²</sup> + C', '(1/2)e<sup>x²</sup> + C', '2x·e<sup>x²</sup> + C', 'x·e<sup>x²</sup> + C'],
            a: 1,
            exp: 'Let u = x², du = 2x dx. So ∫x·e<sup>x²</sup>dx = (1/2)∫e<sup>u</sup>du = (1/2)e<sup>u</sup> + C = <strong>(1/2)e<sup>x²</sup> + C</strong>.'
          },
          {
            q: 'Find the area between <span class="math">y = x²</span> and <span class="math">y = x</span> (they intersect at x = 0 and x = 1)',
            opts: ['1/3', '1/6', '1/2', '1'],
            a: 1,
            exp: 'Area = ∫₀¹(x − x²)dx = [x²/2 − x³/3]₀¹ = 1/2 − 1/3 = <strong>1/6</strong>.'
          },
          {
            q: 'Evaluate: <span class="math">∫ sin(x) dx</span>',
            opts: ['−cos(x) + C', 'cos(x) + C', 'tan(x) + C', '−sin(x) + C'],
            a: 0,
            exp: 'The antiderivative of sin(x) is <strong>−cos(x) + C</strong>. Verify: d/dx[−cos(x)] = sin(x). ✓'
          },
          {
            q: 'Evaluate: <span class="math">∫₀<sup>π</sup> sin(x) dx</span>',
            opts: ['0', '1', '2', 'π'],
            a: 2,
            exp: '[−cos(x)]₀<sup>π</sup> = −cos(π) − (−cos(0)) = −(−1) − (−1) = 1 + 1 = <strong>2</strong>.'
          },
          {
            q: 'Evaluate: <span class="math">∫ 3e<sup>2x</sup> dx</span>',
            opts: ['6e<sup>2x</sup> + C', '(3/2)e<sup>2x</sup> + C', '3e<sup>2x</sup> + C', '(3/4)e<sup>2x</sup> + C'],
            a: 1,
            exp: 'Use substitution u = 2x, du = 2 dx: ∫3e<sup>2x</sup>dx = (3/2)∫e<sup>u</sup>du = <strong>(3/2)e<sup>2x</sup> + C</strong>.'
          },
          {
            q: 'By the Fundamental Theorem of Calculus, if <span class="math">F(x) = ∫₀<sup>x</sup> t² dt</span>, then <span class="math">F\'(x) =</span>',
            opts: ['x³/3', '2x', 'x²', '0'],
            a: 2,
            exp: 'The FTC states d/dx[∫₀<sup>x</sup> f(t)dt] = f(x). So F\'(x) = <strong>x²</strong>.'
          }
        ]
      }
    ]
  },

  chem: {
    name: 'Chemistry Placement',
    description: 'General Chemistry concepts',
    icon: '⚗️',
    topics: [
      {
        id: 'measurement',
        name: 'Matter & Measurement',
        icon: '📏',
        qs: [
          {
            q: 'How many significant figures are in <span class="math">0.00305</span>?',
            opts: ['5', '6', '3', '2'],
            a: 2,
            exp: 'Leading zeros are not significant — they only locate the decimal. The significant digits are 3, 0, 5. Answer: <strong>3</strong>.'
          },
          {
            q: 'Convert <span class="math">25°C</span> to Kelvin.',
            opts: ['248 K', '298 K', '258 K', '−248 K'],
            a: 1,
            exp: 'K = °C + 273.15. So 25 + 273.15 ≈ <strong>298 K</strong>.'
          },
          {
            q: 'Which of these is an <strong>intensive</strong> property?',
            opts: ['Mass', 'Volume', 'Density', 'Heat content'],
            a: 2,
            exp: '<strong>Density</strong> is intensive — it does not depend on how much matter is present. Mass and volume are extensive (they scale with quantity).'
          },
          {
            q: 'Water boiling at 100°C is an example of a:',
            opts: ['Physical change', 'Chemical change', 'Nuclear reaction', 'Decomposition'],
            a: 0,
            exp: 'Boiling changes the state of water (liquid → gas) but not its chemical identity. This is a <strong>physical change</strong>.'
          },
          {
            q: 'Which sample has the greatest mass per mole?',
            opts: ['CO₂ (44 g/mol)', 'N₂ (28 g/mol)', 'CH₄ (16 g/mol)', 'H₂O (18 g/mol)'],
            a: 0,
            exp: 'Molar mass of CO₂ = 12 + 2(16) = <strong>44 g/mol</strong>, which is the largest among the options.'
          },
          {
            q: '<span class="math">0.000456</span> in scientific notation is:',
            opts: ['4.56 × 10³', '4.56 × 10⁻⁴', '4.56 × 10⁴', '0.456 × 10⁻³'],
            a: 1,
            exp: 'Move the decimal 4 places right: 0.000456 = <strong>4.56 × 10⁻⁴</strong>.'
          },
          {
            q: 'A substance is 72% carbon by mass. In a 100 g sample, how many grams of carbon are present?',
            opts: ['7.2 g', '72 g', '28 g', '100 g'],
            a: 1,
            exp: 'Percent mass means grams per 100 g of sample. So a 100 g sample contains <strong>72 g</strong> of carbon.'
          },
          {
            q: '<strong>Accuracy</strong> refers to:',
            opts: ['Closeness to the true value', 'Reproducibility of measurements', 'Number of decimal places', 'Precision of a balance'],
            a: 0,
            exp: '<strong>Accuracy</strong> = closeness to the true (accepted) value. Precision = reproducibility. They are distinct concepts!'
          }
        ]
      },
      {
        id: 'atomic',
        name: 'Atomic Structure',
        icon: '⚛️',
        qs: [
          {
            q: 'What is the electron configuration of nitrogen (Z = 7)?',
            opts: ['1s²2s²2p¹', '1s²2s²2p³', '1s²2s³2p²', '1s²2p⁵'],
            a: 1,
            exp: 'N has 7 electrons. Fill shells in order: 1s² (2e), 2s² (2e), 2p³ (3e). Configuration: <strong>1s²2s²2p³</strong>.'
          },
          {
            q: 'How many protons and neutrons are in <span class="math">¹⁶O</span>?',
            opts: ['8 protons, 16 neutrons', '8 protons, 8 neutrons', '16 protons, 8 neutrons', '6 protons, 10 neutrons'],
            a: 1,
            exp: 'Atomic number (Z) = 8 → protons = 8. Mass number = 16 → neutrons = 16 − 8 = <strong>8 protons and 8 neutrons</strong>.'
          },
          {
            q: 'Which quantum number describes the <strong>shape</strong> of an orbital?',
            opts: ['Principal quantum number (n)', 'Angular momentum quantum number (ℓ)', 'Magnetic quantum number (mℓ)', 'Spin quantum number (ms)'],
            a: 1,
            exp: 'The <strong>angular momentum quantum number (ℓ)</strong> determines shape: ℓ=0 is s (sphere), ℓ=1 is p (dumbbell), ℓ=2 is d.'
          },
          {
            q: 'Which is the correct electron configuration for copper (Cu, Z=29)?',
            opts: ['[Ar]4s²3d⁹', '[Ar]4s±3d¹⁰', '[Ar]4s²3d¹⁰', '[Kr]4s±3d¹⁰'],
            a: 1,
            exp: 'Cu is a known exception. It "steals" one 4s electron to achieve a fully-filled 3d¹⁰: <strong>[Ar]4s±3d¹⁰</strong>. A full d-shell is extra stable.'
          },
          {
            q: 'What is the maximum number of electrons in the n = 3 shell?',
            opts: ['8', '18', '32', '2'],
            a: 1,
            exp: 'Max electrons = 2n². For n=3: 2(3²) = 18. The subshells are 3s(2) + 3p(6) + 3d(10) = <strong>18</strong>.'
          },
          {
            q: 'Hund\'s Rule states that electrons in the same subshell:',
            opts: ['Singly occupy each orbital before pairing', 'Pair up immediately in the lowest orbital', 'Alternate spin in adjacent orbitals', 'Fill the highest energy orbital first'],
            a: 0,
            exp: '<strong>Hund\'s Rule</strong>: electrons occupy each orbital singly with parallel spins before any pairing occurs. This minimizes electron–electron repulsion.'
          },
          {
            q: 'How many orbitals are in the n = 3 shell?',
            opts: ['3', '6', '9', '18'],
            a: 2,
            exp: 'n=3 has subshells 3s (1 orbital), 3p (3 orbitals), 3d (5 orbitals). Total: 1+3+5 = <strong>9 orbitals</strong>.'
          },
          {
            q: 'In the Aufbau principle, which subshell fills <strong>before</strong> 3d?',
            opts: ['3p', '4s', '4p', '3f'],
            a: 1,
            exp: 'The Aufbau filling order goes 3p → <strong>4s</strong> → 3d. The 4s orbital is lower in energy than 3d and fills first.'
          }
        ]
      },
      {
        id: 'periodic',
        name: 'Periodic Trends',
        icon: '📋',
        qs: [
          {
            q: 'Which element has the largest atomic radius in Period 3?',
            opts: ['Cl', 'Na', 'Ar', 'P'],
            a: 1,
            exp: 'Atomic radius decreases left → right across a period (increasing nuclear charge). <strong>Na</strong>, at the far left of Period 3, has the largest radius.'
          },
          {
            q: 'Which element has the highest first ionization energy?',
            opts: ['Cs', 'He', 'Fr', 'K'],
            a: 1,
            exp: 'Ionization energy increases up a group and across a period. <strong>He</strong> (upper-right, noble gas) has the highest first ionization energy.'
          },
          {
            q: 'Which correctly describes the trend in electronegativity?',
            opts: ['Increases down a group, increases across a period', 'Decreases down a group, increases across a period', 'Increases down a group, decreases across a period', 'No periodic trend'],
            a: 1,
            exp: 'Electronegativity <strong>decreases going down</strong> a group (atoms are larger) and <strong>increases going right</strong> across a period. Fluorine is the most electronegative element.'
          },
          {
            q: 'Compared to neutral Na, the Na⁺ ion is:',
            opts: ['Smaller', 'Larger', 'The same size', 'Variable'],
            a: 0,
            exp: 'Cations are <strong>smaller</strong> than the neutral atom: removing an electron reduces electron-electron repulsion, so the remaining electrons pull closer to the nucleus.'
          },
          {
            q: 'Which element has the highest electronegativity?',
            opts: ['F', 'O', 'Cl', 'N'],
            a: 0,
            exp: '<strong>Fluorine (F)</strong> has the highest electronegativity (3.98 on the Pauling scale). It is in the upper-right corner of the periodic table.'
          },
          {
            q: 'Which has the largest atomic radius: Na, Mg, Al, or K?',
            opts: ['Na', 'Mg', 'Al', 'K'],
            a: 3,
            exp: '<strong>K</strong> (potassium) is in Period 4, Group 1. Its atomic radius is larger because it has more electron shells than Na, Mg, and Al (all Period 3).'
          },
          {
            q: 'Metallic character increases when moving:',
            opts: ['Up and to the right', 'Down and to the right', 'Down and to the left', 'Up and to the left'],
            a: 2,
            exp: 'Metals are found in the lower-left of the periodic table. Metallic character increases going <strong>down a group</strong> and <strong>left across a period</strong>.'
          },
          {
            q: 'Which has a higher electron affinity: Cl or Br?',
            opts: ['Cl', 'Br', 'They are equal', 'Cannot determine'],
            a: 0,
            exp: '<strong>Cl</strong> has higher electron affinity than Br. Going up a group, electron affinity generally increases (smaller atoms attract electrons more strongly).'
          }
        ]
      },
      {
        id: 'bonding',
        name: 'Chemical Bonding',
        icon: '🔗',
        qs: [
          {
            q: 'What is the molecular geometry of H₂O?',
            opts: ['Linear', 'Trigonal planar', 'Bent', 'Tetrahedral'],
            a: 2,
            exp: 'O has 4 electron pairs (2 bonds + 2 lone pairs) → tetrahedral electron geometry, but the <strong>bent</strong> molecular geometry due to the two lone pairs.'
          },
          {
            q: 'Which bond is most polar?',
            opts: ['C−H', 'N−H', 'O−H', 'F−H'],
            a: 3,
            exp: 'Polarity depends on electronegativity difference. F is the most electronegative element, so <strong>F−H</strong> has the greatest difference and is the most polar bond.'
          },
          {
            q: 'What is the approximate bond angle in NH₃?',
            opts: ['90°', '109.5°', '~107°', '120°'],
            a: 2,
            exp: 'NH₃ has 3 bonds + 1 lone pair. The lone pair repels more strongly, compressing the bond angle from 109.5° to <strong>~107°</strong>.'
          },
          {
            q: 'Which molecule is <strong>nonpolar</strong> despite having polar bonds?',
            opts: ['H₂O', 'NH₃', 'CO₂', 'HCl'],
            a: 2,
            exp: '<strong>CO₂</strong> is linear. Its two polar C=O bonds point in exactly opposite directions and their dipole moments cancel, making the molecule nonpolar overall.'
          },
          {
            q: 'What type of bond forms between sodium (Na) and chlorine (Cl)?',
            opts: ['Covalent', 'Metallic', 'Ionic', 'Hydrogen bond'],
            a: 2,
            exp: 'Ionic bonds form between metals and nonmetals via electron transfer. Na transfers one electron to Cl, forming Na⁺ and Cl⁻. This is an <strong>ionic bond</strong>.'
          },
          {
            q: 'What is the electron geometry of BF₃ (boron trifluoride)?',
            opts: ['Tetrahedral', 'Trigonal planar', 'Bent', 'Linear'],
            a: 1,
            exp: 'B in BF₃ has 3 bonding pairs and <em>no lone pairs</em>. VSEPR predicts <strong>trigonal planar</strong> geometry with 120° bond angles.'
          },
          {
            q: 'What is the hybridization of carbon in CH₄?',
            opts: ['sp³', 'sp²', 'sp', 'sp³d'],
            a: 0,
            exp: 'CH₄ has 4 bonds to C and no lone pairs on C → tetrahedral shape → <strong>sp³</strong> hybridization (4 hybrid orbitals).'
          },
          {
            q: 'The dipole moment of CO₂ is:',
            opts: ['Zero — bonds cancel due to linear symmetry', 'Large — it has two very polar C=O bonds', 'Small but nonzero', 'Undefined'],
            a: 0,
            exp: 'Although each C=O bond is polar, CO₂ is linear (180°) and the two bond dipoles point in opposite directions and cancel. Net dipole = <strong>zero</strong>.'
          }
        ]
      },
      {
        id: 'stoichiometry',
        name: 'Stoichiometry',
        icon: '⚖️',
        qs: [
          {
            q: 'How many moles are in 44 g of CO₂? (Molar mass = 44 g/mol)',
            opts: ['0.5 mol', '1 mol', '2 mol', '88 mol'],
            a: 1,
            exp: 'Moles = mass / molar mass = 44 g / 44 g·mol⁻¹ = <strong>1 mol</strong>.'
          },
          {
            q: 'In the reaction <span class="math">2H₂ + O₂ → 2H₂O</span>, how many moles of H₂O form from 3 mol H₂?',
            opts: ['1.5 mol', '3 mol', '6 mol', '2 mol'],
            a: 1,
            exp: 'The molar ratio H₂:H₂O = 2:2 = 1:1. So 3 mol H₂ produces <strong>3 mol H₂O</strong>.'
          },
          {
            q: 'A compound has empirical formula CH₂O and molar mass 90 g/mol. What is the molecular formula?',
            opts: ['CH₂O', 'C₂H₄O₂', 'C₃H₆O₃', 'C₄H₈O₄'],
            a: 2,
            exp: 'Empirical formula mass: 12+2+16 = 30 g/mol. Ratio: 90/30 = 3. Molecular formula = 3 × CH₂O = <strong>C₃H₆O₃</strong>.'
          },
          {
            q: 'What is the percent yield if 8.5 g are obtained when 12.0 g are expected?',
            opts: ['40.8%', '70.8%', '141%', '3.5%'],
            a: 1,
            exp: '% yield = (actual / theoretical) × 100 = (8.5 / 12.0) × 100 = <strong>70.8%</strong>.'
          },
          {
            q: 'In <span class="math">2Al + 3Cl₂ → 2AlCl₃</span>, you have 4 mol Al and 3 mol Cl₂. Which is the limiting reagent?',
            opts: ['Al', 'Cl₂', 'AlCl₃', 'Neither'],
            a: 1,
            exp: '4 mol Al needs 4 × (3/2) = 6 mol Cl₂, but only 3 mol Cl₂ is available. <strong>Cl₂</strong> is the limiting reagent.'
          },
          {
            q: 'How many molecules are in 2 mol of any substance?',
            opts: ['6.022 × 10²³', '3.011 × 10²³', '1.204 × 10²⁴', '1.806 × 10²⁴'],
            a: 2,
            exp: '2 mol × 6.022×10²³ molecules/mol = <strong>1.204 × 10²⁴</strong> molecules.'
          },
          {
            q: 'What is the percent composition of oxygen in H₂O? (H = 1, O = 16)',
            opts: ['11.1%', '22.2%', '88.9%', '66.7%'],
            a: 2,
            exp: 'Molar mass of H₂O = 2(1) + 16 = 18 g/mol. % O = (16/18) × 100 = <strong>88.9%</strong>.'
          },
          {
            q: 'Balance the equation: <span class="math">H₂ + O₂ → H₂O</span>',
            opts: ['H₂ + O₂ → H₂O', '2H₂ + O₂ → 2H₂O', 'H₂ + 2O₂ → 2H₂O', '4H₂ + O₂ → 4H₂O'],
            a: 1,
            exp: 'Balance atoms: 4 H on left need 4 H on right (2 H₂O). Then 2 O on right need 1 O₂ on left. Balanced: <strong>2H₂ + O₂ → 2H₂O</strong>.'
          }
        ]
      },
      {
        id: 'gaslaws',
        name: 'Gas Laws',
        icon: '💨',
        qs: [
          {
            q: '<strong>Boyle\'s Law</strong>: A gas at 1.0 atm occupies 5.0 L. What volume at 2.0 atm (constant T)?',
            opts: ['10.0 L', '2.5 L', '5.0 L', '1.0 L'],
            a: 1,
            exp: 'P₁V₁ = P₂V₂ → V₂ = P₁V₁/P₂ = (1.0)(5.0)/2.0 = <strong>2.5 L</strong>. Pressure and volume are inversely proportional.'
          },
          {
            q: '<strong>Charles\'s Law</strong>: A gas at 300 K occupies 3.0 L. At what temperature does it occupy 6.0 L (constant P)?',
            opts: ['150 K', '600 K', '300 K', '1800 K'],
            a: 1,
            exp: 'V₁/T₁ = V₂/T₂ → T₂ = T₁(V₂/V₁) = 300(6.0/3.0) = <strong>600 K</strong>. Volume and temperature are directly proportional.'
          },
          {
            q: 'Using PV = nRT, find the pressure of 2 mol gas in 10 L at 300 K. (R = 0.0821 L·atm/mol·K)',
            opts: ['2.46 atm', '4.93 atm', '0.82 atm', '6.15 atm'],
            a: 1,
            exp: 'P = nRT/V = (2)(0.0821)(300)/10 = 49.26/10 = <strong>4.93 atm</strong>.'
          },
          {
            q: 'Dalton\'s Law states that the total pressure of a gas mixture equals:',
            opts: ['The pressure of the most abundant component', 'The average pressure of all components', 'The sum of all partial pressures', 'The product of partial pressures'],
            a: 2,
            exp: 'Dalton\'s Law: P<sub>total</sub> = P₁ + P₂ + P₃ + … The total pressure is the <strong>sum of all partial pressures</strong>.'
          },
          {
            q: 'At STP (0°C, 1 atm), one mole of an ideal gas occupies approximately:',
            opts: ['11.2 L', '22.4 L', '44.8 L', '8.31 L'],
            a: 1,
            exp: 'At STP, the molar volume of an ideal gas is <strong>22.4 L/mol</strong>. This is a key value to memorize.'
          },
          {
            q: 'By Graham\'s Law of Effusion, which gas effuses fastest: H₂, He, N₂, or O₂?',
            opts: ['H₂', 'He', 'N₂', 'O₂'],
            a: 0,
            exp: 'Lighter gases effuse faster (rate ∝ 1/√M). Molar masses: H₂=2, He=4, N₂=28, O₂=32. <strong>H₂</strong> is lightest and effuses fastest.'
          },
          {
            q: 'When a gas is collected over water, the total pressure equals:',
            opts: ['Only the gas pressure', 'Gas pressure + water vapor pressure', 'Gas pressure − water vapor pressure', 'Only water vapor pressure'],
            a: 1,
            exp: 'By Dalton\'s Law, P<sub>total</sub> = P<sub>gas</sub> + P<sub>H₂O</sub>. The <strong>gas pressure = P<sub>total</sub> − P<sub>water vapor</sub></strong>.'
          },
          {
            q: 'The Kinetic Molecular Theory states that temperature is proportional to:',
            opts: ['Absolute zero', 'Average kinetic energy of particles', 'Volume of gas particles', 'Gas pressure only'],
            a: 1,
            exp: 'Temperature is directly proportional to the <strong>average kinetic energy</strong> of gas molecules: KE<sub>avg</sub> = (3/2)k<sub>B</sub>T.'
          }
        ]
      },
      {
        id: 'solutions',
        name: 'Solutions',
        icon: '💧',
        qs: [
          {
            q: 'What is the molarity of a solution with 0.5 mol NaCl dissolved in 250 mL of solution?',
            opts: ['0.5 M', '0.125 M', '2 M', '0.25 M'],
            a: 2,
            exp: 'Molarity (M) = mol / L = 0.5 mol / 0.250 L = <strong>2 M</strong>.'
          },
          {
            q: 'When a solute is dissolved in a solvent, the boiling point:',
            opts: ['Decreases', 'Increases', 'Stays the same', 'Depends only on the solvent'],
            a: 1,
            exp: 'Boiling Point Elevation: dissolved solutes <strong>increase</strong> the boiling point. ΔTb = i·Kb·m, where m = molality.'
          },
          {
            q: 'How many grams of NaOH (molar mass = 40 g/mol) are needed to make 500 mL of 2 M solution?',
            opts: ['20 g', '40 g', '80 g', '10 g'],
            a: 1,
            exp: 'Moles needed = M × L = 2 × 0.500 = 1 mol. Mass = 1 mol × 40 g/mol = <strong>40 g</strong>.'
          },
          {
            q: 'Colligative properties depend on the:',
            opts: ['Type of solute particles', 'Mass of solute', 'Number of dissolved particles', 'Chemical identity of solute'],
            a: 2,
            exp: 'Colligative properties (BP elevation, FP depression, osmotic pressure) depend on the <strong>number (concentration) of dissolved particles</strong>, not their identity.'
          },
          {
            q: 'Molality (m) is defined as:',
            opts: ['mol solute / L solution', 'mol solute / kg solvent', 'g solute / L solution', 'mol solute / mol solvent'],
            a: 1,
            exp: 'Molality = <strong>mol solute / kg solvent</strong>. Unlike molarity, molality is temperature-independent because it uses mass, not volume.'
          },
          {
            q: 'In osmosis, water moves across a semipermeable membrane toward the region of:',
            opts: ['Lower solute concentration', 'Higher solute concentration', 'Higher pressure', 'Lower temperature'],
            a: 1,
            exp: 'In osmosis, water moves from dilute (low solute) to concentrated (high solute) solution — toward <strong>higher solute concentration</strong>.'
          },
          {
            q: 'Salt is spread on icy roads because it:',
            opts: ['Lowers the freezing point of water', 'Raises the freezing point of water', 'Melts ice through a chemical reaction', 'Increases friction only'],
            a: 0,
            exp: 'Dissolved ions cause <strong>freezing point depression</strong> (ΔTf = i·Kf·m), so the water + salt mixture freezes at a lower temperature than 0°C.'
          },
          {
            q: 'A solution is described as <strong>hypertonic</strong> relative to a cell when it has:',
            opts: ['Lower solute concentration than the cell', 'Higher solute concentration than the cell', 'The same solute concentration as the cell', 'No solutes dissolved'],
            a: 1,
            exp: '<strong>Hypertonic</strong>: higher solute concentration than the reference (cell interior). Water will flow out of the cell via osmosis, causing it to shrink.'
          }
        ]
      },
      {
        id: 'equilibrium',
        name: 'Equilibrium & Acids/Bases',
        icon: '🧪',
        qs: [
          {
            q: 'For <span class="math">N₂ + 3H₂ ⇌ 2NH₃</span>, what is the correct expression for K<sub>c</sub>?',
            opts: ['[N₂][H₂]³/[NH₃]²', '[NH₃]² / ([N₂][H₂]³)', '[N₂]·[H₂]³·[NH₃]²', '[NH₃]/([N₂]·[H₂])'],
            a: 1,
            exp: 'K<sub>c</sub> = [products]<sup>coefficients</sup> / [reactants]<sup>coefficients</sup> = <strong>[NH₃]² / ([N₂][H₂]³)</strong>.'
          },
          {
            q: 'If K<sub>c</sub> >> 1, the equilibrium:',
            opts: ['Strongly favors reactants', 'Strongly favors products', 'Is equally balanced', 'Cannot be determined'],
            a: 1,
            exp: 'A large K<sub>c</sub> means [products] >> [reactants] at equilibrium. The reaction goes mostly to completion. K<sub>c</sub> >> 1 means <strong>products are strongly favored</strong>.'
          },
          {
            q: 'What is the pH of a solution with [H⁺] = 10⁻⁴ M?',
            opts: ['10', '4', '−4', '0.0001'],
            a: 1,
            exp: 'pH = −log[H⁺] = −log(10⁻⁴) = <strong>4</strong>.'
          },
          {
            q: 'What is the pH of a solution where [OH⁻] = 10⁻² M?',
            opts: ['2', '12', '−2', '7'],
            a: 1,
            exp: 'pOH = −log(10⁻²) = 2. Since pH + pOH = 14 at 25°C: pH = 14 − 2 = <strong>12</strong>.'
          },
          {
            q: 'Adding more reactant to a system at equilibrium will, by Le Châtelier\'s Principle:',
            opts: ['Have no effect on the equilibrium position', 'Shift the equilibrium toward products', 'Shift the equilibrium toward reactants', 'Decrease the value of K'],
            a: 1,
            exp: 'Le Châtelier\'s Principle: adding reactant stresses the equilibrium, so it shifts to consume the added reactant — <strong>toward products</strong>. K itself does not change.'
          },
          {
            q: 'A weak acid has a Ka value that is:',
            opts: ['Very large (> 1)', 'Small (<<1)', 'Exactly equal to 1', 'Negative'],
            a: 1,
            exp: 'Weak acids only partially dissociate. Their Ka is <strong>small (<<1)</strong>, meaning the equilibrium favors the undissociated acid (reactant).'
          },
          {
            q: 'A <strong>buffer solution</strong> is best described as:',
            opts: ['A solution at exactly pH 7', 'A mixture that resists changes in pH when acid or base is added', 'A highly concentrated acid', 'A solution with no dissolved ions'],
            a: 1,
            exp: 'A <strong>buffer</strong> is a solution containing a weak acid and its conjugate base (or weak base + conjugate acid) that resists pH changes when small amounts of acid or base are added.'
          },
          {
            q: 'What is the pH of pure water at 25°C?',
            opts: ['0', '6', '7', '14'],
            a: 2,
            exp: 'In pure water, [H⁺] = [OH⁻] = 10⁻⁷ M. pH = −log(10⁻⁷) = <strong>7</strong>. This is the neutral point at 25°C.'
          }
        ]
      },
      {
        id: 'thermo',
        name: 'Thermodynamics',
        icon: '🌡️',
        qs: [
          {
            q: 'A reaction where ΔH < 0 is:',
            opts: ['Endothermic — absorbs heat', 'Exothermic — releases heat', 'At equilibrium', 'Spontaneous at all temperatures'],
            a: 1,
            exp: 'ΔH < 0 means the system releases heat to the surroundings — this is an <strong>exothermic</strong> reaction. (Endothermic has ΔH > 0.)'
          },
          {
            q: 'Which has the highest entropy?',
            opts: ['Ice (solid)', 'Liquid water', 'Steam (gas)', 'Entropy is the same for all phases'],
            a: 2,
            exp: 'Entropy (disorder) increases from solid → liquid → gas. <strong>Steam</strong> has the greatest molecular disorder and therefore the highest entropy.'
          },
          {
            q: 'For a reaction to be spontaneous (at constant T and P), ΔG must be:',
            opts: ['Positive', 'Zero', 'Negative', 'Equal to ΔH'],
            a: 2,
            exp: 'A process is spontaneous when the Gibbs free energy decreases. ΔG < 0 means <strong>spontaneous</strong>. (ΔG = ΔH − TΔS)'
          },
          {
            q: 'In an exothermic reaction, heat flows:',
            opts: ['From surroundings to the system', 'From the system to the surroundings', 'Stays within the system', 'In both directions equally'],
            a: 1,
            exp: 'Exothermic reactions release energy. Heat flows <strong>from the system to the surroundings</strong> (ΔH < 0).'
          },
          {
            q: '<strong>Hess\'s Law</strong> states that:',
            opts: ['Energy cannot be created or destroyed', 'The total ΔH of a reaction equals the sum of ΔH for individual steps', 'Entropy always increases in a spontaneous process', 'ΔG = ΔH − TΔS'],
            a: 1,
            exp: '<strong>Hess\'s Law</strong>: the enthalpy change for a reaction is the same regardless of the pathway taken — it equals the sum of ΔH values for each step.'
          },
          {
            q: 'A reaction where ΔH < 0 and ΔS > 0 is spontaneous:',
            opts: ['At all temperatures', 'Only at high temperatures', 'Only at low temperatures', 'Never'],
            a: 0,
            exp: 'ΔG = ΔH − TΔS. If ΔH < 0 and ΔS > 0, then ΔG is always negative regardless of T. The reaction is spontaneous <strong>at all temperatures</strong>.'
          },
          {
            q: 'A catalyst increases reaction rate by:',
            opts: ['Increasing the temperature', 'Lowering the activation energy', 'Increasing the concentration of reactants', 'Changing the equilibrium constant K'],
            a: 1,
            exp: 'A catalyst provides an alternative reaction pathway with a <strong>lower activation energy</strong>. It does not change the equilibrium constant or the thermodynamics.'
          },
          {
            q: 'The First Law of Thermodynamics states that:',
            opts: ['Energy is conserved — it cannot be created or destroyed', 'Entropy always increases', 'ΔG < 0 for spontaneous processes', 'Heat flows from hot to cold'],
            a: 0,
            exp: 'The First Law is the law of <strong>conservation of energy</strong>: the total energy of an isolated system remains constant. Energy is transformed, not created or destroyed.'
          }
        ]
      }
    ]
  }
};

/* ===== FLASHCARD DATA ===== */
const FLASHCARDS = {
  calc: [
    { front: 'Power Rule', back: 'd/dx[xⁿ] = n·xⁿ⁻¹' },
    { front: 'Product Rule', back: 'd/dx[u·v] = u\'v + uv\'' },
    { front: 'Quotient Rule', back: 'd/dx[u/v] = (u\'v − uv\') / v²' },
    { front: 'Chain Rule', back: 'd/dx[f(g(x))] = f\'(g(x)) · g\'(x)' },
    { front: 'd/dx[eˣ]', back: 'eˣ' },
    { front: 'd/dx[ln(x)]', back: '1/x' },
    { front: 'd/dx[sin(x)]', back: 'cos(x)' },
    { front: 'd/dx[cos(x)]', back: '−sin(x)' },
    { front: 'd/dx[tan(x)]', back: 'sec²(x)' },
    { front: '∫xⁿ dx', back: 'xⁿ⁺¹/(n+1) + C  (n ≠ −1)' },
    { front: '∫eˣ dx', back: 'eˣ + C' },
    { front: '∫sin(x) dx', back: '−cos(x) + C' },
    { front: '∫cos(x) dx', back: 'sin(x) + C' },
    { front: '∫1/x dx', back: 'ln|x| + C' },
    { front: 'Fundamental Theorem of Calculus', back: '∫ₐᵇ f(x)dx = F(b) − F(a)\nwhere F\'(x) = f(x)' },
    { front: 'sin(30°) = sin(π/6)', back: '1/2' },
    { front: 'sin(45°) = sin(π/4)', back: '√2/2 ≈ 0.707' },
    { front: 'sin(60°) = sin(π/3)', back: '√3/2 ≈ 0.866' },
    { front: 'cos(60°) = cos(π/3)', back: '1/2' },
    { front: 'cos(30°) = cos(π/6)', back: '√3/2 ≈ 0.866' },
    { front: 'Pythagorean Identity', back: 'sin²(x) + cos²(x) = 1\n1 + tan²(x) = sec²(x)' },
    { front: 'Double Angle: sin(2x)', back: '2·sin(x)·cos(x)' },
    { front: 'Double Angle: cos(2x)', back: 'cos²(x) − sin²(x)\n= 1 − 2sin²(x)\n= 2cos²(x) − 1' },
    { front: 'Limit: lim(x→0) sin(x)/x', back: '= 1' },
    { front: 'Limit: lim(x→0) (1−cos x)/x²', back: '= 1/2' },
  ],
  chem: [
    { front: 'Ideal Gas Law', back: 'PV = nRT\nR = 0.0821 L·atm/(mol·K)' },
    { front: 'Boyle\'s Law', back: 'P₁V₁ = P₂V₂  (constant T)' },
    { front: 'Charles\'s Law', back: 'V₁/T₁ = V₂/T₂  (constant P, T in Kelvin)' },
    { front: 'Gay-Lussac\'s Law', back: 'P₁/T₁ = P₂/T₂  (constant V)' },
    { front: 'Dalton\'s Law of Partial Pressures', back: 'P_total = P₁ + P₂ + P₃ + …' },
    { front: 'pH Definition', back: 'pH = −log[H⁺]' },
    { front: 'pOH Definition', back: 'pOH = −log[OH⁻]' },
    { front: 'pH + pOH Relationship', back: 'pH + pOH = 14  (at 25°C)' },
    { front: 'Molarity (M)', back: 'M = mol solute / L solution' },
    { front: 'Molality (m)', back: 'm = mol solute / kg solvent' },
    { front: 'Gibbs Free Energy', back: 'ΔG = ΔH − TΔS\nΔG < 0: spontaneous' },
    { front: 'Percent Yield', back: '% yield = (actual / theoretical) × 100%' },
    { front: 'Boiling Point Elevation', back: 'ΔTb = i · Kb · m' },
    { front: 'Freezing Point Depression', back: 'ΔTf = i · Kf · m' },
    { front: 'Electronegativity Order', back: 'F > O > N > Cl > Br\n(most to least electronegative)' },
    { front: 'Aufbau Filling Order', back: '1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p…' },
    { front: 'Max electrons in shell n', back: '2n²\n(n=1: 2, n=2: 8, n=3: 18, n=4: 32)' },
    { front: 'Avogadro\'s Number', back: 'Nₐ = 6.022 × 10²³ particles/mol' },
    { front: 'Molar Volume at STP', back: '22.4 L per mole of ideal gas\n(0°C, 1 atm)' },
    { front: 'Kelvin Conversion', back: 'K = °C + 273.15' },
    { front: 'Le Châtelier\'s Principle', back: 'A system at equilibrium shifts to\ncounteract any applied stress\n(concentration, pressure, temperature)' },
    { front: 'VSEPR: 2 bonds, 0 lone pairs', back: 'Linear (180°)\nExample: CO₂, BeCl₂' },
    { front: 'VSEPR: 3 bonds, 0 lone pairs', back: 'Trigonal Planar (120°)\nExample: BF₃, SO₃' },
    { front: 'VSEPR: 4 bonds, 0 lone pairs', back: 'Tetrahedral (109.5°)\nExample: CH₄' },
    { front: 'VSEPR: 4 bonds, 1 lone pair', back: 'Trigonal Pyramidal (~107°)\nExample: NH₃' },
    { front: 'VSEPR: 4 bonds, 2 lone pairs', back: 'Bent (~104.5°)\nExample: H₂O' },
  ]
};

/* ===== REFERENCE SHEET DATA ===== */
const REFERENCE = {
  calc: [
    {
      title: '📐 Derivative Rules',
      rows: [
        ['d/dx[xⁿ]', 'nxⁿ⁻¹', 'Power Rule'],
        ['d/dx[c]', '0', 'Constant Rule'],
        ['d/dx[eˣ]', 'eˣ', 'Exponential'],
        ['d/dx[aˣ]', 'aˣ ln(a)', 'Exponential (base a)'],
        ['d/dx[ln x]', '1/x', 'Natural Log'],
        ['d/dx[sin x]', 'cos x', 'Trig'],
        ['d/dx[cos x]', '−sin x', 'Trig'],
        ['d/dx[tan x]', 'sec²(x)', 'Trig'],
        ['d/dx[sec x]', 'sec(x)tan(x)', 'Trig'],
        ['d/dx[u·v]', "u'v + uv'", 'Product Rule'],
        ['d/dx[u/v]', "(u'v − uv') / v²", 'Quotient Rule'],
        ['d/dx[f(g(x))]', "f'(g(x))·g'(x)", 'Chain Rule'],
      ]
    },
    {
      title: '∫ Integration Rules',
      rows: [
        ['∫xⁿ dx', 'xⁿ⁺¹/(n+1) + C  (n ≠ −1)', 'Power Rule'],
        ['∫eˣ dx', 'eˣ + C', ''],
        ['∫1/x dx', 'ln|x| + C', ''],
        ['∫sin x dx', '−cos x + C', ''],
        ['∫cos x dx', 'sin x + C', ''],
        ['∫sec²x dx', 'tan x + C', ''],
        ['∫aˣ dx', 'aˣ/ln(a) + C', ''],
        ['FTC: ∫ₐᵇ f(x)dx', 'F(b) − F(a)', 'F\'(x) = f(x)'],
      ]
    },
    {
      title: '〰️ Trigonometry',
      rows: [
        ['sin(0°)', '0', ''],
        ['sin(30°) = sin(π/6)', '1/2', ''],
        ['sin(45°) = sin(π/4)', '√2/2', ''],
        ['sin(60°) = sin(π/3)', '√3/2', ''],
        ['sin(90°) = sin(π/2)', '1', ''],
        ['cos(0°)', '1', ''],
        ['cos(30°) = cos(π/6)', '√3/2', ''],
        ['cos(45°) = cos(π/4)', '√2/2', ''],
        ['cos(60°) = cos(π/3)', '1/2', ''],
        ['sin²x + cos²x', '= 1', 'Pythagorean Identity'],
        ['sin(2x)', '2sin(x)cos(x)', 'Double Angle'],
        ['cos(2x)', 'cos²x − sin²x', 'Double Angle'],
        ['Period of sin(bx)', '2π/b', ''],
      ]
    },
    {
      title: '∞ Key Limits',
      rows: [
        ['lim(x→0) sin(x)/x', '= 1', 'Fundamental Limit'],
        ['lim(x→0) (1−cosx)/x', '= 0', ''],
        ['lim(x→0) (1−cosx)/x²', '= 1/2', ''],
        ['lim(x→∞) (1 + 1/x)ˣ', '= e', 'Definition of e'],
        ['lim(x→∞) xⁿ/eˣ', '= 0  (any n)', 'Exponential wins'],
        ['lim(x→0⁺) ln(x)', '= −∞', ''],
        ['lim(x→∞) ln(x)', '= ∞', ''],
      ]
    }
  ],
  chem: [
    {
      title: '💨 Gas Laws',
      rows: [
        ['PV = nRT', 'Ideal Gas Law; R = 0.0821 L·atm/(mol·K)', ''],
        ['P₁V₁ = P₂V₂', "Boyle's Law (constant T)", ''],
        ['V₁/T₁ = V₂/T₂', "Charles's Law (constant P)", ''],
        ['P₁/T₁ = P₂/T₂', "Gay-Lussac's Law (constant V)", ''],
        ['P_total = ΣPᵢ', "Dalton's Law of Partial Pressures", ''],
        ['Rate ∝ 1/√M', "Graham's Law of Effusion", ''],
        ['Molar vol. @ STP', '22.4 L/mol', ''],
      ]
    },
    {
      title: '🧪 Acids, Bases & Equilibrium',
      rows: [
        ['pH = −log[H⁺]', '', ''],
        ['pOH = −log[OH⁻]', '', ''],
        ['pH + pOH = 14', '(at 25°C)', ''],
        ['Kw = [H⁺][OH⁻]', '= 1.0 × 10⁻¹⁴ (25°C)', ''],
        ['Ka', 'Acid dissociation constant (weak acids: Ka << 1)', ''],
        ['Kb', 'Base dissociation constant', ''],
        ['Ksp', 'Solubility product constant', ''],
        ["Le Chatelier's", 'System shifts to oppose any imposed change', ''],
      ]
    },
    {
      title: '⚖️ Stoichiometry',
      rows: [
        ['Moles = mass / molar mass', 'n = m / M', ''],
        ['Molarity = mol / L', 'M = n / V', ''],
        ['Molality = mol / kg', 'm = n / kg(solvent)', ''],
        ['% yield = actual/theoretical × 100', '', ''],
        ['% composition = (mass element / molar mass) × 100', '', ''],
        ['Avogadro\'s Number', '6.022 × 10²³ mol⁻¹', ''],
        ['ΔTb = i·Kb·m', 'Boiling point elevation', ''],
        ['ΔTf = i·Kf·m', 'Freezing point depression', ''],
      ]
    },
    {
      title: '🌡️ Thermodynamics',
      rows: [
        ['ΔG = ΔH − TΔS', 'Gibbs Free Energy', ''],
        ['ΔG < 0', 'Spontaneous process', ''],
        ['ΔG > 0', 'Non-spontaneous (needs energy input)', ''],
        ['ΔH < 0', 'Exothermic (releases heat)', ''],
        ['ΔH > 0', 'Endothermic (absorbs heat)', ''],
        ['ΔS > 0', 'Entropy increases (more disorder)', ''],
        ["Hess's Law", 'ΔH is path-independent; add steps', ''],
        ['q = mcΔT', 'Heat transfer formula', ''],
      ]
    },
    {
      title: '⚛️ Atomic & Periodic Trends',
      rows: [
        ['Electron config. order', '1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p …', 'Aufbau'],
        ['Max e⁻ per shell n', '2n²', ''],
        ['Orbitals per subshell', 's=1, p=3, d=5, f=7', ''],
        ['Atomic radius', '↑ down group, ↓ across period (→)', ''],
        ['Ionization energy', '↓ down group, ↑ across period (→)', ''],
        ['Electronegativity', '↓ down group, ↑ across period (→)', ''],
        ['Most electronegative', 'F > O > N > Cl > Br', ''],
      ]
    }
  ]
};
