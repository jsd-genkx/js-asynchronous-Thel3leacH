export const asyncBasic = () => {
	console.log(`Start`); // A

	setTimeout(() => { 
		// setTimeout(callback, delay [ms])
		console.log(`Wait for 1 second -- I'm back 😎`); // B
	}, 1000);

	// setTimeout(() => {console.log(1)})
	// setTimeout(() => {console.log(2)})
	// setTimeout(() => {console.log(3)})

	console.log(`End`); // C
};

// asyncBasic();
