import { DataTypes, Model, Optional } from 'sequelize';
import { IResource } from '../../interfaces/resource';
import connection  from '../index'



class Resource extends Model {
    public id!: number;
    public title!: string;
    public description!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Resource.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: new DataTypes.STRING(128),
        allowNull: false
      },
      description: {
        type: new DataTypes.STRING(128),
        allowNull: false
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize: connection,
      tableName: 'resources',
      modelName: 'Resource'
    }
);

export default Resource;