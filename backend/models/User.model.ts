import { Column, Model, DataType, Table, HasMany } from "sequelize-typescript";
import Content from "./Content.model";

@Table({ tableName: "user", timestamps: false })
export default class User extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    field: "id",
    autoIncrement: true,
  })
  declare id: number;

  @Column({ type: DataType.STRING, field: "name" })
  declare name: string;

  // Relations
  @HasMany(() => Content, "userId")
  declare contents: Content[];
}
