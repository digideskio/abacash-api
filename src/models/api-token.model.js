import { randomBytes } from 'crypto';

export default function(sequelize, DataTypes) {
    const APIToken = sequelize.define('APIToken', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        token: DataTypes.STRING,
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
        classMethods: {
            associate(models) {
                APIToken.belongsTo(models.System);
            },
            generate(body) {
                const token = randomBytes(16).toString('hex');
                return this.create({ ...body, token });
            }
        }
    });

    return APIToken;
}
