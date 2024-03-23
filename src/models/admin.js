const supabase = require('../config/database');

const admin = {
  findByUsername:async (username)=> {
    try {
        // Query the "candidats" table to find the user by username
        const { data, error } = await supabase
            .from('admins')
            .select('*')
            .eq('username', username)
            .single(); // Assuming the username is unique

        if (error) {
            return error;
        }

        if (!data|| !data.username) {
            console.log('User not found');
            return 'User not found'; // User not found
        }

        return data; // Return the user data
    } catch (error) {
        return error;
    }
},
};

module.exports = admin;
