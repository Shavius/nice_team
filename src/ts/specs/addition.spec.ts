import addition from "../modules/addition";

describe("division", () => {
	it("should return correct answer for 10 and 10", () => {
		expect(addition(10, 10)).toBe("answer 20");
	});

	it('should return "answer 0" for undefined arguments', () => {
		expect(addition()).toBe("answer 0");
	});
});
